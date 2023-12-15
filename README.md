# AleoGaurd-Privacy driven Identity aggregator for plug-and-play SSO
AleoGuard is an easy to integrate user sign in and permissioned data acquisition tool for applications to acquire data and consent of its users. This SSO is designed to move from custodial SSO like google github.com/gitshreevatsaconnect to a more decentralized approach to improve the current web3 SSOs.
AleoGuard uses Aleo’s native high speed Zkproofs and privacy first policy to enable users to aggregate all their identities and have full discretion on how their private data is handled.
## Components 
- Data repository -  Allows users to import data and generate proofs for it.
- Client UI 
- Authentication client - This is an application library that allows AleoGuard to be integrated to any Dapp and use the proofs for Sign in.
- Application ID - The ID returned after the repository generates a proof for requested data which will act as representative of the user on that application.
## UI and Demonstration
[Visit AleoGuard](https://shashumay.wixsite.com/aleoguard)

- User Flow demo https://www.loom.com/share/80c3db8b25224750aef6e682bf4cc4eb

## Implementation

- Find the smartContract code in `AleoGaurd/src/main.leo` 
- Install necessary dependancies to compile smart contract and run program

### Top level Functionality - 
- User can create a repository and the proof generated for it is used as proof of ownership
- User can also update his repository with new data post verification of ownership
- User can also retrieve these Data on our application post signing and can choose to make it public or not
- This contract is used to verify ownership by the SSO plugin

  ### UI is present in the frontend Folder
- `cd frontend &&npm i` then run `npm start`

