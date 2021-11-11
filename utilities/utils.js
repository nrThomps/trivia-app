/**
 * Replaces all HTML special character codes with their special characters
 * 
 * A more robust implementation of this would be to import all of the special characters
 * and offer a replacement for each instance, instead of explicitly specifying our replacements
 * here.
 * 
 * @param {String} question 
 * @returns modified string with special characters
 */
export const formatQuestionString = (question) => {
    return question.replaceAll('&#039;', "'").replaceAll("&quot;", '"').replaceAll('&Aring;', 'Å')
}