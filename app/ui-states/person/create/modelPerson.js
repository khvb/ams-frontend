'use strict';

angular.module('AMS.new.contract.model', [])
    .factory('programme', [function () {

        function getProgrammes() {
            return [
                {
                    "name": "Programme 1",
                    "value": "programme_1"
                },
                {
                    "name": "Programme 2",
                    "value": "programme_2"
                },
            ];
        }

        return {
            getProgrammes: getProgrammes
        }
    }])
    .factory('recipient', [function () {

        function getRecipients() {
            return [
                {
                    "name": "Recipient 1",
                    "value": "recipient_1"
                },
                {
                    "name": "Recipient 2",
                    "value": "recipient_2"
                },
            ];
        }

        return {
            getRecipients: getRecipients
        }
    }])
    .factory('currency', [function () {

        function getCurrencies() {
            return [
                {
                    "name": "USD",
                    "value": "usd"
                },
                {
                    "name": "Euro",
                    "value": "euro"
                },
                {
                    "name": "Yena",
                    "value": "yena"
                },
                {
                    "name": "GBP",
                    "value": "gbp"
                },
            ];
        }

        return {
            getCurrencies: getCurrencies
        }
    }])
    .factory('beneficiary', [function () {

        function getBeneficiaries() {
            return [
                {
                    "name": "Ministry of Foreighn Affairs",
                    "value": "ministry_of_foreighn_affairs"
                },
                {
                    "name": "MEDT",
                    "value": "medt"
                },
                {
                    "name": "MECI",
                    "value": "meci"
                },
                {
                    "name": "Ministry of agriculture",
                    "value": "ministry_of_agriculture"
                },
            ];
        }

        return {
            getBeneficiaries: getBeneficiaries
        }
    }])
    .factory('donor', [function () {

        function getDonors() {
            return [
                {
                    "name": "EU",
                    "value": "eu"
                },
                {
                    "name": "USA",
                    "value": "usa"
                },
                {
                    "name": "China",
                    "value": "china"
                },
                {
                    "name": "Great Britain",
                    "value": "great_britain"
                },
                {
                    "name": "Japan",
                    "value": "japan"
                },
            ];
        }

        return {
            getDonors: getDonors
        }
    }])
;