export const SPORT_CONFIG = {
    NFL: {
        slots: ['QB', 'RB', 'WR', 'WR', 'TE', 'FLEX'],
        flexEligible: ['RB', 'WR', 'TE'],
        rounds: 6,
        groupSize: 6,
        scoring: 'half-ppr',
        stackPositions: ['QB', 'WR', 'TE'],
        dataSources: ['fantasypros', 'rotowire']
    },

    CFB: {
        // TODO: verify slots and scoring against live CFB draft room DOM
    },

    MLB: {
        slots: ['P', 'IF', 'IF', 'OF', 'OF', 'FLEX'],
        flexEligible: ['IF', 'OF'],
        rounds: 6,
        groupSize: 6,
        scoring: 'standard',
        stackPositions: ['OF', 'IF'],
        dataSources: ['fantasypros', 'rotowire', 'baseballsavant']
    },

    NBA: {
        // TODO: verify slots and scoring against live CFB draft room DOM
    },

    NHL: {
        // TODO: verify slots and scoring against live CFB draft room DOM
    },

    PGA: {
        // TODO: verify slots and scoring against live CFB draft room DOM
    }
}

/**
 * 
 * @param {string} url - Full page URL e.g. https://app.underdogsports.com/lobby/mlb/draft/123
 * @returns {string|null} Sport key or null if not a draft page
 */

export function detectSport(url) {
    if (url.includes('nfl')) {
        return 'NFL';
    } else if (url.includes('mlb')) {
        return 'MLB';
    } else if (url.includes('nba')) {
        return 'NBA';
    } else if (url.includes('cfb')) {
        return 'CFB';
    } else if (url.includes('nhl')) {
        return 'NHL';
    } else if (url.includes('pga')) {
        return 'PGA';
    } else {
        return null;
    }
}