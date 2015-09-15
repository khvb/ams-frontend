'use strict';

angular.module('AMS.new.person.controller', ['formly', 'formlyBootstrap'])
    .controller('newPersonController',
    [
        function () {

            var vmP = this;

            // The model object that we reference
            // on the <formly-form> element in index.html
            vmP.model = {};

            // An array of our form fields with configuration
            // and options set. We make reference to this in
            // the 'fields' attribute on the <formly-form> element
            vmP.fields = [
            {
                className: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'firstName',
                        templateOptions: {
                            label: 'First Name'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'lastName',
                        templateOptions: {
                            label: 'Last Name'
                        },
                        expressionProperties: {
                            'templateOptions.disabled': '!model.firstName'
                        }
                    }
                ]
            },
            {
                template: '<hr /><div><strong>More information:</strong></div>'
            },
            {
                className: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'organisation',
                        templateOptions: {
                            label: 'Organisation'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'position',
                        templateOptions: {
                            label: 'Position'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'zip',
                        templateOptions: {
                            type: 'number',
                            label: 'Zip',
                            max: 99999,
                            min: 0,
                            pattern: '\\d{5}'
                        }
                    }
                ]
            },
            {
                className: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'phoneM',
                        templateOptions: {
                            label: 'Mobile Phone Number'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'pnoneW',
                        templateOptions: {
                            label: 'Work Phone Number'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'eMail',
                        templateOptions: {
                            type: 'email',
                            label: 'e-mail'
                        }
                    }
                ]
            },
            {
                template: '<hr />'
            },
            {
                type: 'input',
                key: 'notes',
                templateOptions: {
                    label: 'Notes'
                }
            },
            {
                type: 'checkbox',
                key: 'otherToo',
                templateOptions: {
                    label: 'Other Checkbox'
                }
            }
        ];
        }]);

