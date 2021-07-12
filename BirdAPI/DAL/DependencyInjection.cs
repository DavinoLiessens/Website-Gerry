using DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public static class DependencyInjection
    {
        public static IServiceCollection RegisterRepositories(this IServiceCollection services)
        {
            services.AddTransient<IBirdRepository, BirdRepository>();
            services.AddTransient<IOwnerRepository, OwnerRepository>();
            return services;
        }

        public static IServiceCollection RegisterORM(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));
            return services;
        }
    }
}
