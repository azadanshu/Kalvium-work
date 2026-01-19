# BeatHub Design Document

## 1. Data Relationships
- Artist is the parent entity.
- Album references Artist.
- Song references Album and Artist.
- User is independent.
- Playlist references User and contains Song references.

## 2. Design Decisions

### Why reference Songs in Playlist?
Referencing avoids duplication. If a song changes, all playlists reflect the update automatically.

### Why reference Artist in Song?
It enables fast queries like "find all songs by an artist" without traversing albums.
