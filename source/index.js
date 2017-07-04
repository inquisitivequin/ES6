import keyVal from '../external/external';

console.log(keyVal)

if (module.hot) {
	module.hot.accept('../external/external', () => {
		console.log('I got the update fool!');
		console.log(keyVal)
	})
}