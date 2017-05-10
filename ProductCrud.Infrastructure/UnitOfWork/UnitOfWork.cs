using ProductCrud.Entities;
using ProductCrud.Infrastructure.GenericRepository;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductCrud.Infrastructure.UnitOfWork
{
    //O design unit of work não é necessário aqui, considerando que se trata de apenas uma entidade, mas resolvi colocar apenas para demonstrar
    public class UnitOfWork : IDisposable
    {
        private ProductCrudContext _context = null;
        private GenericRepository<Product> _productRepository;

        public UnitOfWork()
        {
            _context = new ProductCrudContext();
        }

        public GenericRepository<Product> ProductRepository
        {
            get
            {
                if (this._productRepository == null)
                    this._productRepository = new GenericRepository<Product>(_context);
                return _productRepository;
            }
        }
        public void Save()
        {
            try
            {
                _context.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
                throw e;
            }

        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }

}
