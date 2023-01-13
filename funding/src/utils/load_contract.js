import contract from "@truffle/contract";

export const loadContract = async(fileName,provider)=>{
    const res = await fetch(`/contracts/${fileName}.json`);
    const Artifact = await res.json();
    const _contract = contract(Artifact)
    _contract.setProvider(provider)
    const deployedContract = await _contract.deployed();
    return deployedContract;
}