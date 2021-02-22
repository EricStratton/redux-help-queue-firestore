import * as actions from './../../actions/index';
import * as constants from './../../actions/ActionTypes';

describe('help queue actions', () => {

  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: constants.DELETE_TICKET,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: constants.TOGGLE_FORM
    });
  });

  it('addTicket should create ADD_TICKET action', () => {
    expect(actions.addTicket({ names: 'Jo and Jasmine', location: '3e', issue: 'Redux not working.', timeOpen: 0, 
    formattedWaitTime: "A few seconds", id: 1 })).toEqual({
      type: constants.ADD_TICKET,
      names: 'Jo and Jasmine',
      location: '3e',
      issue: 'Redux not working.',
      timeOpen: 0,
      formattedWaitTime: "A few seconds",
      id: 1
    });
  });

  it('updateTime should create UPDATED_TIME action', () => {
    expect(actions.updateTime(1, "A few seconds")).toEqual({
      type: constants.UPDATE_TIME,
      id: 1,
      formattedWaitTime: "A few seconds"
    });
  });

});