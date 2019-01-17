import playerlistReducer from './playerlist';
import * as constants from '../constants/ActionTypes';

const initialState = {
    playersById: [
        {
            name: 'LeBron James',
            team: 'LOS ANGELES LAKERS',
            position: 'SF',
            starred: true,
        },
        {
            name: 'Kevin Duran',
            team: 'GOLDEN STATE WARRIORS',
            position: 'SF',
            starred: false,
        },
        {
            name: 'Anthony Davis',
            team: 'NEW ORLEANS PELICANS',
            position: 'PF',
            starred: false,
        },
        {
            name: 'Stephen Curry',
            team: 'GOLDEN STATE WARRIORS',
            position: 'PG',
            starred: false,
        },
        {
            name: 'James Harden',
            team: 'HOUSTON ROCKETS',
            position: 'SG',
            starred: false,
        },
        {
            name: 'Kawhi Leonard',
            team: 'TORONTO RAPTORS',
            position: 'SF',
            starred: false,
        },
    ],
};

describe('playerlistReducer', () => {
    describe('when initializing', () => {
        it('sets a balance', () => {
            expect(playerlistReducer(undefined, {})).toEqual(initialState);
        });
    });

    it('add player', () => {
        const name = 'name';
        const position = 'position';

        expect(
            playerlistReducer(initialState, {
                type: constants.ADD_PLAYER,
                payload: { name, position },
            }),
        ).toEqual({
            ...initialState,
            playersById: [
                ...initialState.playersById,
                {
                    name,
                    position: position || 'SF',
                    team: 'LOS ANGELES LAKERS',
                },
            ],
        });
    });
});
