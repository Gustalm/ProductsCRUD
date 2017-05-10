using ProductCrud.Entities;
using ProductCrud.Domain.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProductCrud.Infrastructure.UnitOfWork;
using System.Transactions;

namespace ProductCrud.Domain
{
    public class ProductDomain : IDomain<Product>
    {
        private readonly UnitOfWork _unitOfWork;

        public ProductDomain()
        {
            _unitOfWork = new UnitOfWork();
        }
        public Product Create(Product entity)
        {
            using (var scope = new TransactionScope())
            {
                _unitOfWork.ProductRepository.Insert(entity);
                _unitOfWork.Save();
                scope.Complete();

                return entity;
            }
        }

        public long Delete(long id)
        {
            _unitOfWork.ProductRepository.Delete(id);
            return id;
        }

        public IEnumerable<Product> GetAll()
        {
            var products = _unitOfWork.ProductRepository.Get();

            return products.Any() ? products : null;
        }

        public Product GetById(long id)
        {
            var product = _unitOfWork.ProductRepository.GetByID(id);
            return product ?? null;
        }

        public Product Update(Product entity)
        {
            using (var scope = new TransactionScope())
            {
                _unitOfWork.ProductRepository.Update(entity);
                _unitOfWork.Save();
                scope.Complete();

                return entity;
            }
        }
    }
}
