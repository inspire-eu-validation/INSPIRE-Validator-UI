# User Interface of the INSPIRE Reference Validator

This repository includes the code of the [User Interface of the INSPIRE Reference Validator](https://inspire.ec.europa.eu/validator).

# How to contribute to the User Interface of the INSPIRE Reference Validator

The process to contribute to the product and integrate developments into the INSPIRE Reference Validator UI is defined by development guidelines which include issue creation, branch management, code review, and deployment strategies. 
This guidelines are designed to guide users who will contribute to the maintenance and evolution of the the INSPIRE Reference Validator UI, promoting collaborative development practices and facilitating community engagement.

1. Branching strategy

  - The main branch for development is named staging  
All development work will be based on the staging branch

2. Change management process

All changes to the codebase must be initiated through an issue creation.  
The issue must comprehensively describe the changes to be incorporated in the INSPIRE Reference Validator UI

3. Development workflow

Upon issue creation, a new branch will be created from the staging branch, named after the issue (e.g., "issue-xxx")  
Development work will be carried out on this issue-specific branch

4. Pull Request (PR) process

Once development work is concluded, a pull request must be opened targeting the staging branch.  
A reviewer will be assigned to the PR to ensure code quality and compliance.

5. Review and deployment

The assigned reviewer will check the code for compliance before approving the PR.  
Upon approval, the changes will be deployed to the Staging environment

6. Community verification

The community will be informed about the changes through the issue created initially  
They will verify the functionality and compliance of the developments in the Staging environment

7. Production release

The staging branch will serve as the source for production releases.  
The latest version of the staging branch will be deployed in the Staging environment and, when validated the proper functioning, in the Production environment according to the INSPIRE Reference VAlidator release strategy.   
