using ProductCrudAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProductCrud.Domain.Contracts;
using ProductCrud.Domain;
using ProductCrud.Entities;

namespace ProductCrudAPI.Controllers
{
    [AllowAnonymous]
    public class ProductsController : ApiController
    {
        //domain models e data models são a mesmas, logo, não é necessario DTO's e mappers.
        private readonly IDomain<Product> _productDomain;
        public ProductsController()
        {
            _productDomain = new ProductDomain();
        }
        // GET: api/Products
        public HttpResponseMessage Get()
        {
            try
            {
                var products = _productDomain.GetAll();

                return Request.CreateResponse(HttpStatusCode.OK, products);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
                throw;
            }

        }

        // GET: api/Products/5
        public HttpResponseMessage Get(long id)
        {
            var product = _productDomain.GetById(id);

            return Request.CreateResponse(HttpStatusCode.OK, product);
        }

        // POST: api/Products
        public HttpResponseMessage Post(Product productParam)
        {
            var product = _productDomain.Create(productParam);

            return Request.CreateResponse(HttpStatusCode.OK, product);
        }

        // PUT: api/Products/5
        public HttpResponseMessage Put(Product productParam)
        {
            var product = _productDomain.Update(productParam);

            return Request.CreateResponse(HttpStatusCode.OK, product);
        }

        // DELETE: api/Products/5
        public HttpResponseMessage Delete(long id)
        {
            var product = _productDomain.Delete(id);

            return Request.CreateResponse(HttpStatusCode.OK, id);
        }
    }
}
