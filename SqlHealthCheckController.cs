﻿using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Diagnostics.HealthChecks;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FluxCms
{
    [Route("api/[controller]")]
    public class SqlHealthCheckController : Controller
    {
        // GET: /<controller>/
        public class SqlConnectionHealthCheck : IHealthCheck
        {
            private static readonly string DefaultTestQuery = "Select 1";

            public string ConnectionString { get; }

            public string TestQuery { get; }

            public SqlConnectionHealthCheck(string connectionString)
                : this(connectionString, testQuery: DefaultTestQuery)
            {
            }

            public SqlConnectionHealthCheck(string connectionString, string testQuery)
            {
                ConnectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
                TestQuery = testQuery;
            }

            [HttpGet]
            public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default(CancellationToken))
            {
                using (var connection = new SqlConnection(ConnectionString))
                {
                    try
                    {
                        await connection.OpenAsync(cancellationToken);

                        if (TestQuery != null)
                        {
                            var command = connection.CreateCommand();
                            command.CommandText = TestQuery;

                            await command.ExecuteNonQueryAsync(cancellationToken);
                        }
                    }
                    catch (DbException ex)
                    {
                        return new HealthCheckResult(status: context.Registration.FailureStatus, exception: ex);
                    }
                }

                return HealthCheckResult.Healthy();
            }
        }
    }
}