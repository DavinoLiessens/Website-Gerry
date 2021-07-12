using BLL.Profiles;
using BLL.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public static class DependencyInjection
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {
            // AUTOMAPPER
            services.AddAutoMapper(typeof(MainProfile));

            // SERVICES
            services.AddTransient<IBirdService, BirdService>();
            services.AddTransient<IOwnerService, OwnerService>();

            return services;
        }
    }
}
