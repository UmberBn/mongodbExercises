// Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .
db.vendas.aggregate([
  {
    $match: {
      status: {
        $in: ['ENTREGUE', 'EM SEPARACAO'],
      },
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-03-31')
      },
    },
  },
  {
    $group: {
      _id: '$clienteId',
      totalDeCompras: {
        $sum: 1,
      }
    },
  },
  {
    $match: {
      totalDeCompras: {
        $lt: 3,
      },
    },
  },
  {
    $count: 'clientes',
  },
]);
