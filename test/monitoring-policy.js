/**
 * Created by Ali on 8/15/2016.
 */
var assert = require('assert');
var oneandone = require('../lib/liboneandone');
var helper = require('../test/testHelper');
var server = {};
var policy = {};
var port = {};
var process = {};
var server = {};
var policyData = {
    "name": "node monitoring policy11",
    "description": "node monitoring policy description",
    "email": "",
    "agent": true,
    "thresholds": {
        "cpu": {
            "warning": {
                "value": 90,
                "alert": false
            },
            "critical": {
                "value": 95,
                "alert": false
            }
        },
        "ram": {
            "warning": {
                "value": 90,
                "alert": false
            },
            "critical": {
                "value": 95,
                "alert": false
            }
        },
        "disk": {
            "warning": {
                "value": 80,
                "alert": false
            },
            "critical": {
                "value": 90,
                "alert": false
            }
        },
        "transfer": {
            "warning": {
                "value": 1000,
                "alert": false
            },
            "critical": {
                "value": 2000,
                "alert": false
            }
        },
        "internal_ping": {
            "warning": {
                "value": 50,
                "alert": false
            },
            "critical": {
                "value": 100,
                "alert": false
            }
        }
    },
    "ports": [
        {
            "protocol": "TCP",
            "port": "22",
            "alert_if": "RESPONDING",
            "email_notification": true
        }
    ],
    "processes": [
        {
            "process": "test",
            "alert_if": "NOT_RUNNING",
            "email_notification": true
        }
    ]
};

describe('Monitoring policy tests', function () {
    this.timeout(900000);

    before(function (done) {
        helper.authenticate(oneandone);
        oneandone.createMonitoringPolicy(policyData, function (error, response, body) {
            helper.assertNoError(201, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            policy = JSON.parse(body);
            done();
        });
    });

    after(function (done) {
        oneandone.deleteMonitoringPolicy(policy.id, function (error, response, body) {
            helper.assertNoError(202, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            done();
        });
    });

    it('List Monitoring Policy', function (done) {
        oneandone.listMonitoringPolicies(function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert(object.length > 0);
            done();
        });
    });

    it('List Monitoring Policy with options', function (done) {
        var options = {
            page: 1,
            perPage: 1
        };
        oneandone.listMonitoringPoliciesWithOptions(options, function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert(object.length > 0);
            done();
        });
    });

    it('Get Monitoring Policy', function (done) {
        oneandone.getMonitoringPolicy(policy.id, function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert.equal(object.id, policy.id);
            done();
        });
    });

    it('Update Monitoring Policy', function (done) {
        updateData = {
            "name": "node Monitoring Policy reName",
            "description": "node Monitoring Policy Description",
            "email": "test2@gmail.com",
            "thresholds": {
                "cpu": {
                    "warning": {
                        "value": 90,
                        "alert": false
                    },
                    "critical": {
                        "value": 95,
                        "alert": false
                    }
                },
                "ram": {
                    "warning": {
                        "value": 90,
                        "alert": false
                    },
                    "critical": {
                        "value": 95,
                        "alert": false
                    }
                },
                "disk": {
                    "warning": {
                        "value": 80,
                        "alert": false
                    },
                    "critical": {
                        "value": 90,
                        "alert": false
                    }
                },
                "transfer": {
                    "warning": {
                        "value": 1000,
                        "alert": false
                    },
                    "critical": {
                        "value": 2000,
                        "alert": false
                    }
                },
                "internal_ping": {
                    "warning": {
                        "value": 50,
                        "alert": false
                    },
                    "critical": {
                        "value": 100,
                        "alert": false
                    }
                }
            }
        };
        oneandone.updateMonitoringPolicy(policy.id, updateData, function (error, response, body) {
            helper.assertNoError(202, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert.equal(object.name, updateData.name);
            done();
        });
    });

    it('Add Ports to Monitoring Policy', function (done) {
        var portsData = {
            "ports": [
                {
                    "protocol": oneandone.ProtocolType.TCP,
                    "port": "80",
                    "alert_if": oneandone.AlertIfType.NOT_RESPONDING,
                    "email_notification": false
                }
            ]
        };
        oneandone.createMonitoringPolicyForPorts(policy.id, portsData, function (error, response, body) {
            helper.assertNoError(202, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert(object.ports.length > 0);
            port = object.ports[0];
            done();
        });
    });

    it('List Monitoring Policy Ports', function (done) {
        oneandone.listMonitoringPoliciesPorts(policy.id, function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert(object.length > 0);
            done();
        });
    });

    it('Get Monitoring Policy Port', function (done) {
        oneandone.getPortsMonitoringPolicy(policy.id, port.id, function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert.equal(object.id, port.id);
            done();
        });
    });

    it('Update Monitoring Policy Ports', function (done) {
        updatePortData = {
            "ports": {
                "protocol": oneandone.ProtocolType.TCP,
                "port": "80",
                "alert_if": oneandone.AlertIfType.RESPONDING,
                "email_notification": false
            }
        };
        oneandone.updatePortsMonitoringPolicy(policy.id, port.id, updatePortData, function (error, response, body) {
            helper.assertNoError(202, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert.equal(object.id, policy.id);
            done();
        });
    });

    it('Delete Monitoring Policy Port', function (done) {
        oneandone.deletePortsMonitoringPolicy(policy.id, port.id, function (error, response, body) {
            helper.assertNoError(202, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            done();
        });
    });

    it('Add Processes to Monitoring Policy', function (done) {
        var processesData = {
            "processes": [
                {
                    "process": "taskmmgr",
                    "alert_if": oneandone.ProcessAlertType.RUNNING,
                    "email_notification": false
                }
            ]
        };
        oneandone.createMonitoringPolicyForProcesses(policy.id, processesData, function (error, response, body) {
            helper.assertNoError(202, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert(object.processes.length > 0);
            process = object.processes[0];
            done();
        });
    });

    it('List Monitoring Policy Processes', function (done) {
        oneandone.listMonitoringPoliciesProcesses(policy.id, function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert(object.length > 0);
            done();
        });
    });

    it('Get Monitoring Policy Process', function (done) {
        oneandone.getProcessesMonitoringPolicy(policy.id, process.id, function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert.equal(object.id, process.id);
            done();
        });
    });

    it('Update Monitoring Policy Process', function (done) {
        updatePortData = {
            "processes": {
                "process": "test",
                "alert_if": oneandone.ProcessAlertType.RUNNING,
                "email_notification": false
            }
        };
        oneandone.updateProcessesMonitoringPolicy(policy.id, process.id, updatePortData, function (error, response, body) {
            helper.assertNoError(202, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert.equal(object.id, policy.id);
            done();
        });
    });

    it('Delete Monitoring Policy Process', function (done) {
        oneandone.deleteProcessesMonitoringPolicy(policy.id, process.id, function (error, response, body) {
            helper.assertNoError(202, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            done();
        });
    });


    it('Add Servers to Monitoring Policy', function (done) {
        helper.getRandomServerWithMonitoringPolicy(function (result) {
            server = result;
            var serversData = {
                "servers": [
                    server.id
                ]
            };
            oneandone.createMonitoringPolicyForServers(policy.id, serversData, function (error, response, body) {
                helper.assertNoError(202, response, function (result) {
                    assert(result);
                });
                assert.notEqual(response, null);
                assert.notEqual(body, null);
                var object = JSON.parse(body);
                assert(object.servers.length > 0);
                done();
            });
        });

    });

    it('List Monitoring Policy Servers', function (done) {
        oneandone.listMonitoringPoliciesServers(policy.id, function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert(object.length > 0);
            done();
        });
    });

    it('Get Monitoring Policy Server', function (done) {
        oneandone.getServersMonitoringPolicy(policy.id, server.id, function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert.equal(object.id, server.id);
            done();
        });
    });


    it('Delete Monitoring Policy Server', function (done) {
        oneandone.deleteServersMonitoringPolicy(policy.id, server.id, function (error, response, body) {
            helper.assertNoError(202, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            done();
        });
    });

});