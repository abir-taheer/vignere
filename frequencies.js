module.exports = {
	a: 0.082,
	b: 0.015,
	c: 0.028,
	d: 0.043,
	e: 0.127,
	f: 0.022,
	g: 0.02,
	h: 0.061,
	i: 0.07,
	j: 0.002,
	k: 0.008,
	l: 0.04,
	m: 0.024,
	n: 0.067,
	o: 0.075,
	p: 0.019,
	q: 0.001,
	r: 0.06,
	s: 0.063,
	t: 0.091,
	u: 0.028,
	v: 0.01,
	w: 0.024,
	x: 0.002,
	y: 0.02,
	z: 0.001,
};

console.log(
	Object.keys(module.exports).reduce((a, c) => a + module.exports[c], 0)
);
