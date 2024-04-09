def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    reversed = []
    for index, letter in enumerate(phrase):
        reversed.append(phrase[-index - 1])
        # print(reversed)
    return "".join(reversed)