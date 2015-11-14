module.exports = {
	method: 'GET',
	path: '/',
	handler: (request, reply) => {
		reply.file('./public/index.html');
	}
};