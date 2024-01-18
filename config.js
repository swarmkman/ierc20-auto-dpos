const config = {
    // 你想要打多少张，这里就设置多少
    repeatCount: 40,

	// gas限制 20*1000000000 约1.1u
	maxGasPrice: 30*1000000000,
	
    // 在当前的 gas 基础上增加多少倍，**建议1.1以上，防止gas过低无法确认导致交易作废
    increaseGas: 1.1,
	
	//dpos使用分数
	usePoints: 50000,
	
	// 挖矿的时间段，0-23.
	// workTime: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]，
	workTime: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
	
	// 开始时间检测间隔(默认15分钟)
	checkTime: 15,
	
	// gas检测间隔(默认5分钟)
	gasCheckTime: 5,
	
	// 每一笔交易停顿多少秒 **建议20s以上防止网络延迟导致2笔在同一个区块确认
	sleepTime: 30,
	
    // 付费金额（默认为 0 转
    payPrice: "0",

    // 你钱包的私钥
    privateKey: "",

    // 接收地址
    receiveAddress: "0x0000000000000000000000000000000000000000",

	// rpc 地址，如果出现网络报错，可以在 https://chainlist.org/ 查找可用rpc替换
    rpcUrl: "https://ethereum.publicnode.com"

}

module.exports = config