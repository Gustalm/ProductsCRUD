using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductCrud.Domain.Contracts
{
    public interface IDomain<T>
    {
        T GetById(long id);
        IEnumerable<T> GetAll();
        T Create(T entity);
        T Update(T entity);
        long Delete(long id);
    }
}
