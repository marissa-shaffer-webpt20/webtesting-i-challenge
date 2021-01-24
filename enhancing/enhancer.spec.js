const enhancer = require('./enhancer.js');
// test away!
const blade = {name: "Blade", enhancement: 12, durability: 40}
const spear = {name: "Spear", enhancement: 20, durability: 60}
const maul = {name: "Maul", enhancement: 15, durability: 40}

test ("testing repair", () => {
    expect(enhancer.repair(blade).durability).toBe(100)
})

test('testing success', () => {
    expect(enhancer.success(blade).enhancement).toBe(13)
    expect(enhancer.success(spear).enhancement).toBe(20)
    expect(enhancer.success(maul).enhancement).toBe(16)
})

test('testing durability failure', () => {
    expect(enhancer.fail(blade).durability).toBe(35)
    expect(enhancer.fail(spear).durability).toBe(50)
    expect(enhancer.fail(maul).durability).toBe(30)
})

test('testing enhancement failure', () => {
    expect(enhancer.fail(blade).enhancement).toBe(12)
    expect(enhancer.fail(spear).enhancement).toBe(19)
    expect(enhancer.fail(maul).enhancement).toBe(15)
})

test('testing modified name', () => {
    expect(enhancer.get(blade).name).toBe("[+12] Blade")
    expect(enhancer.get(spear).name).toBe("[+20] Spear")
    expect(enhancer.get(maul).name).toBe("[+15] Maul")
})