cube(`Workflows`, {
  sql: `SELECT * FROM public.workflows`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [subtitle, id, title, entityid]
    }
  },
  
  dimensions: {
    subtitle: {
      sql: `subtitle`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    entityid: {
      sql: `${CUBE}."entityId"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
