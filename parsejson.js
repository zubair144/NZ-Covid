const {Parser, transforms: { unwind }} = require('json2csv');
const fs = require('fs');
const path = require('path');

const fields = 
['australianBusinessNumber', 
'australianCompanyNumber', 
'australianServiceAddress', 
'company.annualReturnFilingMonth', 
'company.annualReturnLastFiled',
'company.countryOfOrigin',
'company.extensiveShareholding',
'company.financialReportFilingMonth',
'company.hasConstitutionFiled',
'company.nzsxCode',
'company.overseasCompany',
'company.shareholding.numberOfShares',
'company.shareholding.shareAllocation',
'company.stockExchangeListed',
'emailAddress.emailAddress',
'emailAddress.emailPurpose', 
'emailAddress.emailPurposeDescription',
'emailAddress.startDate', 
'emailAddress.uniqueIdentifier',
'entityName', 
'entityNames.endDate',
'entityNames.entityName',
'entityNames.startDate',
'entityStatus.comment',
'entityStatus.endDate',
'entityStatus.entityStatus',
'entityStatus.startDate',
'entityStatus.statusReasonCode',
'entityStatusCode',
'entityStatusDescription',
'entityTypeCode',
'entityTypeDescription',
'gstEffectiveDate',
'gstStatus',
'historicShareholder',
'industryClassification',
'insolvencyDetails',
'lastUpdatedDate',
'locationIdentifier',
'nzbn',
'otherAddress',
'phoneNumber',
'physicalAddress',
'postalAddress',
'principalPlaceOfActivity',
'privacySettings',
'registeredAddress.address1',
'registeredAddress.address2',
'registeredAddress.address3',
'registeredAddress.address4',
'registeredAddress.careOf',
'registeredAddress.countryCode',
'registeredAddress.endDate',
'registeredAddress.pafID',
'registeredAddress.postCode',
'registeredAddress.startDate',
'registeredAddress.uniqueIdentifier',
'registrationDate',
'roles.acn',
'roles.asicDirectorshipYn',
'roles.asicName',
'roles.endDate',
'roles.roleAddress',
'roles.roleAsicAddress',
'roles.roleEntity',
'roles.rolePerson.firstName',
'roles.rolePerson.lastName',
'roles.rolePerson.middleNames',
'roles.rolePerson.title',
'roles.roleStatus',
'roles.roleType',
'roles.startDate',
'roles.uniqueIdentifier',
'sourceRegister',
'sourceRegisterUniqueIdentifier',
'startDate',
'supportingInformation',
'tradingNames',
'ultimateHoldingCompany',
'website'
];
const transforms = [unwind({ paths: ['company', 'emailAddress', 'entityNames', 'entityStatus', 'registeredAddress', 'roles'] })];
// const opts = { fields };

try {
    
    let rawdata = fs.readFileSync(path.resolve(__dirname + '\\files', 'mega.json'));
    let student = JSON.parse(rawdata);
    // console.log(student);

    const data = new Parser({fields, transforms});
    const csv = data.parse(student.nzbnpubsec.entity);
    // console.log(csv);

    fs.writeFile('files/result.csv', csv, 'utf8', function (err) {
        if (err) {
          console.log('Some error occured - file either not saved or corrupted file saved.');
        } else{
          console.log('It\'s saved!');
        }
      });


} catch (err) {
  console.error(err);
}