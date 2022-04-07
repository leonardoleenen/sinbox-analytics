cube(`Sessions`, {
  sql: `SELECT * FROM public.sessions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, id, entityid]
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    entityid: {
      sql: `${CUBE}."entityId"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
