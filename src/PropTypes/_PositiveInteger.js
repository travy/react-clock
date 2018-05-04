import PropTypes from "prop-types";

var sprintf = require("sprintf-js").sprintf;

/**
 * Determines if a given property is a positive integer value.  The number zero
 * will be interpreted as a positive value.
 *
 * @param {type} props
 * @param {type} propName
 * @param {type} componentName
 *
 * @returns {Error}
 */
PropTypes.positiveInteger = function (props, propName, componentName) {
    let dataValue = props[propName];

    if (! Number.isInteger(dataValue) || dataValue < 0) {
        return new Error(sprintf('Invalid prop `%s` of type `%s` was supplied to `%s` when a positive integer was expected.',
                propName, typeof dataValue, componentName));
    }
};
