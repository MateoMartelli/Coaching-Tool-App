import { LargeNumberLike } from "crypto"

interface Tag {
    id: Int,
    name: String
}

interface Role {
    id: Int,
    name: String
}

interface Team {
    id: Int,
    name: String
}

interface Lane {
    id: Int,
    name: String
}

interface User {
    id: Int,
    email: String,
    username: String,
    role: Role,
    team: Team,
    lane?: Lane,
    createdAt?: Date,
    updatedAt?: Date
}

interface Clip {
    id: Int,
    url: String,
    startTime: String,
    endTime: String,
    tag: Tag,
    lane?: Lane,
    isError: Boolean,
    teamBlue: String,
    teamRed: String,
    league: String,
    match: String,
    game: String,
    patch: String,
    side: String,
    notes: String,
    createdAt?: Date,
    updatedAt?: Date
}

interface UserClip {
    id: Int,
    user: User,
    clip: Clip
}