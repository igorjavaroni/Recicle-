import knex, { Knex } from 'knex';

export async function up(knex: Knex) {
    Knex.schema.createTable('points', table => {
        table.increments('id').primary();

    });
    
    
}

export async function down() {
    
}