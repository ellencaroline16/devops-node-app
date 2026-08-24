const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('deve retornar status 200 e mensagem de sucesso', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('GET /health', () => {
  it('deve retornar status healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});

describe('GET /soma/:a/:b', () => {
  it('deve somar dois números corretamente', async () => {
    const res = await request(app).get('/soma/2/3');
    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(5);
  });

  it('deve retornar 400 para parâmetros inválidos', async () => {
    const res = await request(app).get('/soma/abc/3');
    expect(res.statusCode).toBe(400);
  });
});
