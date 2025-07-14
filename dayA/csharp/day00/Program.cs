using System;
using Classes;

namespace myApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Person p = new Person
            {
                Name = "Aaron",
                Age = 38
            };
            p.Greet();
        }
    }
}