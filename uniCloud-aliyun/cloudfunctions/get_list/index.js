'use strict';

const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		name,
		page = 1,
		pageSize = 10
	} = event

	let matchObj = {}
	if (name !== '全部') {
		matchObj = {
			classify: name
		}
	}

	const list = await db.collection('article').aggregate().match(matchObj).project({
		content: 0,
	})
	// 跳过多少条数据
	.skip(pageSize * (page - 1))
	.limit(pageSize)
	.end()

	// const list = await db.collection('article').field({
	// 	content: false
	// }).get()

	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
};
