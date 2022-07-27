// const UA = require('./ua.json');
// const RU = require('./ru.json');
import UA from './ua.json';
import RU from './ru.json';
let replace = (str,...params) => {
	let i = 0;
	return str?.replace(/%/g, x=> params[i++]??'');
}
let translator = {
	lang: 'RU',
	dic: { UA: UA, RU: RU },

	getTranslation(v1,v2, ...params) {
		return replace(this.dic[this.lang][v1][v2], ...params);
	},
	setLang(value) {
		this.lang = value;
	},
};
export default translator;


