db.vendas.aggregate([
  {
    $group: {
      _id: '$clienteId',
      valorTotal: {
        $sum: '$valorTotal',
      }
    },
  },
  {
    $match: {
      valorTotal: {
        $gt: 5,
      },
    },
  },
  {
    $group: {
      _id: null,
      totalDeClientes: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      _id: 0,
    }
  },
]);
