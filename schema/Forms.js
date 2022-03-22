cube(`Forms`, {
  sql: `SELECT * FROM public.forms`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    description: {
      sql: `description`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    }
  },
  
  dataSource: `default`
});
