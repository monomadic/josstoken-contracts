import { task } from 'hardhat/config';

task("deployToken", "Deploys a VaultFactory")
	.addParam("tokenName", "tbd")
	.addParam("tokenSymbol")
	.setAction(async (taskArgs, hre) => {
		const tokenFactory = await hre.ethers.getContractFactory("Token");
		const contract = await tokenFactory.deploy(
			taskArgs.tokenName,
			taskArgs.tokenSymbol
		);
		const deployed = await contract.deployed();

		console.log(
			`Deployed ${taskArgs.tokenSymbol} token to ${deployed.address}`
		);
	});

task("mintToken", "Mints tokens to an address")
	.addParam("tokenAddress", "Address of token contract")
	.addParam("recipientAddress", "Address to send minted tokens")
	.addParam("amount", "Amount of tokens to mint")
	.setAction(async (taskArgs, hre) => {
		const tokenFactory = await hre.ethers.getContractFactory("Token");

		// mint 1000 coins and send to contract owner
		let instance = tokenFactory.attach(taskArgs.tokenAddress);
		await instance.mint(
			taskArgs.recipientAddress,
			hre.ethers.utils.parseUnits(taskArgs.amount.toString(), 18)
		);

		console.log(
			`Minted ${taskArgs.amount} tokens to ${taskArgs.recipientAddress}`
		);
	});
