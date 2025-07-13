import { v4 } from 'uuid'

export function generateRandomString() {
    const randomString = v4()
    return randomString
}