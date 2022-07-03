import ENV from '@environment';
import baseResourse from '@src/base/resources/base/base';

const BASE_URL = `${ENV.API.BASE_URL}/users`

const _public = {};

_public.save = data => baseResourse.post(BASE_URL, data);

export default _public;
