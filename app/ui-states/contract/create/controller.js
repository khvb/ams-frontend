'use strict';

angular.module('AMS.new.contract.controller', ['formly', 'formlyBootstrap'])
    .controller('NewContractController',
    ['donor', 'programme', 'currency', 'beneficiary', 'recipient',
        function (donor, programme, currency, beneficiary, recipient) {

            var vm = this;

            // The model object that we reference
            // on the <formly-form> element in index.html
            vm.rental = {};

            // An array of our form fields with configuration
            // and options set. We make reference to this in
            // the 'fields' attribute on the <formly-form> element
            vm.rentalFields = [
                {
                    key: 'donor',
                    type: 'select',
                    templateOptions: {
                        label: 'Donor',
                        // Give the name of the donor
                        options: donor.getDonors()
                    },
                },
                {
                    key: 'programme',
                    type: 'select',
                    templateOptions: {
                        label: 'Programme',
                        // Give the title of the programme
                        options: programme.getProgrammes()
                    },
                },
                {
                    key: 'name_of_contract',
                    type: 'input',
                    templateOptions: {
                        type: 'text',
                        label: 'Name of Contract',
                        placeholder: 'Enter name of contract',
                        required: true
                    }
                },
                {
                    key: 'contract_code',
                    type: 'input',
                    templateOptions: {
                        type: 'text',
                        label: 'Code of Contract',
                        placeholder: 'Enter code of Contract',
                        required: true
                    }
                },
                {
                    key: 'signment_date',
                    type: 'input',
                    templateOptions: {
                        type: 'date',
                        label: 'Date of Signment',
                        placeholder: 'Enter Date of Signment',
                        required: true
                    }
                },
                {
                    key: 'budget',
                    type: 'input',
                    templateOptions: {
                        type: 'double',
                        label: 'Budget of Contract',
                        placeholder: 'Enter Budget of Contract',
                        required: true
                    }
                },
                {
                    key: 'currency',
                    type: 'select',
                    templateOptions: {
                        label: 'Currency',
                        // Select the currency
                        options: currency.getCurrencies()
                    }
                },
                {
                    key: 'start',
                    type: 'input',
                    templateOptions: {
                        type: 'date',
                        label: 'Start of Contract',
                        placeholder: 'Enter start of Contract',
                        required: true
                    }
                },
                {
                    key: 'end',
                    type: 'input',
                    templateOptions: {
                        type: 'date',
                        label: 'End of Contract',
                        placeholder: 'Enter end of Contract',
                        required: true
                    }
                },
                {
                    key: 'beneficiary',
                    type: 'select',
                    templateOptions: {
                        label: 'Beneficiary',
                        // Select the beneficiary of the programme
                        options: beneficiary.getBeneficiaries()
                    }
                },
                {
                    key: 'recipient',
                    type: 'select',
                    templateOptions: {
                        label: 'Recipient',
                        // Select the recipient of the programme
                        options: recipient.getRecipients()
                    }
                },
            ];
        }]);

