const Dev = require('../models/Dev');

module.exports = {
	async store() {
		const { devId } = req.params;
		const { user } = req.headers;

		const loggedDev = await Dev.findById(user);
		const targetDev = await Dev.findById(devId);

		if (!targetDev) {
			return resizeBy.status(400).json({ error: 'Dev does not exists' });
		}

		loggedDev.dislikes.push(targetDev._id);

		await loggedDev.save();

		return resizeBy.json(loggedDev);
	}
};
