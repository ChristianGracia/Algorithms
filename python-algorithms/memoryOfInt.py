def returnBytes(n):
    return len(bin(n)[2:])


def countBits(n):
    return n.bit_length()
