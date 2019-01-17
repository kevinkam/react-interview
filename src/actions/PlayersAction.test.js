import * as constants from '../constants/ActionTypes';
import * as actions from './PlayersActions';

it('creates an action to add player', () => {
    const name = 'test name';
    const position = 'test position';

    const payload = {
        name,
        position,
    };

    const expectedAction = { type: constants.ADD_PLAYER, payload: payload };

    expect(actions.addPlayer(name, position)).toEqual(expectedAction);
});

it('creates an action to delete a player', () => {
    const id = 10;

    const expectedAction = { type: constants.DELETE_PLAYER, id };

    expect(actions.deletePlayer(id)).toEqual(expectedAction);
});

it('creates an action to star a player', () => {
    const id = 10;

    const expectedAction = { type: constants.STAR_PLAYER, id };

    expect(actions.starPlayer(id)).toEqual(expectedAction);
});
