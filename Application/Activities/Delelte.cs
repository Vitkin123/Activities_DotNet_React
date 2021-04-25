using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delelte
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _dataContext;
            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {

                var itemToDelete = await _dataContext.Activities.FindAsync(request.Id);
                if (itemToDelete != null)
                {
                    _dataContext.Activities.Remove(itemToDelete);
                }
                await _dataContext.SaveChangesAsync();
                return Unit.Value;

            }
        }

    }
}