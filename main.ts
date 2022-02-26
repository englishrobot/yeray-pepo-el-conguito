namespace SpriteKind {
    export const dinero_papuardo = SpriteKind.create()
    export const camiralla = SpriteKind.create()
    export const elGusanote = SpriteKind.create()
    export const MnM = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.MnM, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        otherSprite.destroy(effects.disintegrate, 1000)
        sprite.vy = -150
    } else {
        info.setScore(michalachichacoin)
        cagarnivel(false)
    }
})
function cagarnivel (pasadiño: boolean) {
    if (pasadiño) {
        culletrever += 1
    }
    if (culletrever == 1) {
        camarilla.vx = 15
        scene.cameraFollowSprite(camarilla)
        laba = 110
        scene.setTileMap(img`
            22222222222222222222222222222222e....5.....e................
            ................................e9..77.....e...............a
            ................................e77....e..8e..........777.77
            ................................e...777e...e.....59.........
            ................................e.....9e5..e.....7777.......
            ................................e.77777e7..e................
            ................................e......e...e..........777.77
            ................................e77777.e...e.........9......
            ................................e......e...e.......777......
            ................................e.77777e..7e..77............
            ................................e......e...e................
            ......555......................8e7777..c..........77........
            f.....559.8....8....8....8............9c9.....9.............
            777777777...77...77...77...77..77777777e77777777............
            eeeeeeeee222ee222ee222ee222ee22eeeeeeeeeeeeeeeee222222222222
            `, TileScale.Eight)
    } else if (culletrever == 2) {
        camarilla.vx = 0
        scene.cameraFollowSprite(pepo)
        laba = 190
        scene.setTileMap(img`
            222222222222222222........................222222222222222222
            ............................................................
            ...........................5.....5..........................
            ....................5...7..7..7..7..7.......................
            .................5..7..................5....................
            ..........................5............7....................
            .................77777777...5...............................
            ........................e7.....5..........7.................
            .........................e7777...5..........................
            ..........................eeee77...5........5...............
            ................................7...........7...............
            ............................................................
            ...............................5...7...........5............
            ...............................................7............
            .............................5..77................5.........
            ........................5......7e.................7.........
            ..............................7e.....................5......
            ......................5..77777e....1.1.111111111.....7......
            .................5......7eeeee.................11...........
            ...............5.......7e.......................111.........
            ..................77777e..........................11........
            .................7eeeee............................11..55...
            f...............7e..................................11.55..a
            7777777777777777e....................................1177777
            eeeeeeeeeeeeeeee222222222222222222222222222222222222222eeeee
            `, TileScale.Eight)
    } else {
        game.over(true, effects.smiles)
    }
    scene.setTile(7, img`
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        e 9 7 7 e e 7 9 
        e e 7 e e e e 7 
        e e e e e e e e 
        b e e e e e e e 
        e e e e e e e e 
        e e e e e e b e 
        `, true)
    scene.setTile(14, img`
        e e e e e e b e 
        e b e e e e e e 
        e e e e e e e e 
        e e e e e e e b 
        e e e e e e e e 
        e e b e e e e e 
        e e e e e e e e 
        e e e e e b e e 
        `, true)
    scene.setTile(2, img`
        2 e e e 2 2 4 2 
        4 e e 2 4 4 2 4 
        4 2 4 2 2 4 2 2 
        2 4 2 4 4 e e e 
        2 4 4 2 2 e e e 
        e e e 4 2 4 4 2 
        e e 4 2 4 2 2 4 
        4 2 4 4 2 e e e 
        `, false)
    scene.setTile(15, img`
        d d d d d d d d 
        d e e e e e f d 
        d e e e e e f d 
        d e e e e 4 f d 
        d e e e e e f d 
        d e e e e e f d 
        d e e e e e f d 
        d d d d d d d d 
        `, false)
    scene.setTile(10, img`
        d d d d d d d d 
        d f e e e e e d 
        d f e e e e e d 
        d f 4 e e e e d 
        d f e e e e e d 
        d f e e e e e d 
        d f e e e e e d 
        d d d d d d d d 
        `, true)
    scene.setTile(5, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, false)
    scene.setTile(1, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, true)
    scene.setTile(12, img`
        e e e e e e b e 
        e b e e e e e e 
        e e e e e e e e 
        e e e e e e e b 
        e e e e e e e e 
        e e b e e e e e 
        e e e e e e e e 
        e e e e e b e e 
        `, false)
    scene.setTile(9, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, false)
    scene.setTile(8, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, false)
    tiles.destroySpritesOfKind(SpriteKind.dinero_papuardo)
    for (let value of scene.getTilesByType(5)) {
        dineruchi_uchi = sprites.create(img`
            . e 4 5 5 5 5 . 
            e 4 5 5 5 5 5 5 
            e 4 5 e 4 5 5 5 
            e 4 5 e 4 5 5 5 
            e 4 5 e 4 5 5 5 
            e 4 5 e 4 5 5 5 
            e 4 5 5 5 5 5 5 
            . e 4 5 5 5 5 . 
            `, SpriteKind.dinero_papuardo)
        animation.runImageAnimation(
        dineruchi_uchi,
        [img`
            . e 4 5 5 5 5 . 
            e 4 5 5 5 5 5 5 
            e 4 5 e 4 5 5 5 
            e 4 5 e 4 5 5 5 
            e 4 5 e 4 5 5 5 
            e 4 5 5 5 5 5 5 
            e 4 5 5 5 5 5 5 
            . e 4 5 5 5 5 . 
            `,img`
            . . e 4 5 5 5 . 
            . e 4 5 5 5 5 . 
            . e 4 5 e 5 5 5 
            . e 4 5 e 5 5 5 
            . e 4 5 e 5 5 5 
            . e 4 5 5 5 5 5 
            . e 4 5 5 5 5 . 
            . . e 4 5 5 5 . 
            `,img`
            . . . e 4 5 . . 
            . . e 4 5 5 . . 
            . . e 4 5 5 5 . 
            . . e 4 5 5 5 . 
            . . e 4 5 5 5 . 
            . . e 4 5 5 5 . 
            . . e 4 5 5 . . 
            . . . e 4 5 . . 
            `,img`
            . . . . 5 . . . 
            . . . e 5 . . . 
            . . . e 5 5 . . 
            . . . e 5 5 . . 
            . . . e 5 5 . . 
            . . . e 5 5 . . 
            . . . e 5 . . . 
            . . . . 5 . . . 
            `,img`
            . . . . 5 . . . 
            . . . . e . . . 
            . . . . e 5 . . 
            . . . . e 5 . . 
            . . . . e 5 . . 
            . . . . e 5 . . 
            . . . . e . . . 
            . . . . 5 . . . 
            `,img`
            . . . 5 . . . . 
            . . . e . . . . 
            . . 5 e . . . . 
            . . 5 e . . . . 
            . . 5 e . . . . 
            . . 5 e . . . . 
            . . . e . . . . 
            . . . 5 . . . . 
            `,img`
            . . 5 e . . . . 
            . . 5 4 e . . . 
            . 5 5 4 e . . . 
            . 5 5 4 e . . . 
            . 5 5 4 e . . . 
            . 5 5 4 e . . . 
            . . 5 4 e . . . 
            . . 5 e . . . . 
            `,img`
            . . 5 4 e . . . 
            . . 5 5 4 e . . 
            . 5 5 5 4 e . . 
            . 5 5 5 4 e . . 
            . 5 5 5 4 e . . 
            . 5 5 5 4 e . . 
            . . 5 5 4 e . . 
            . . 5 4 e . . . 
            `,img`
            . 5 5 5 4 e . . 
            . 5 5 5 5 4 e . 
            5 5 5 e 5 4 e . 
            5 5 5 e 5 4 e . 
            5 5 5 e 5 4 e . 
            5 5 5 5 5 4 e . 
            . 5 5 5 5 4 e . 
            . 5 5 5 4 e . . 
            `,img`
            . 5 5 5 5 4 e . 
            5 5 5 5 5 5 4 e 
            5 5 5 4 e 5 4 e 
            5 5 5 4 e 5 4 e 
            5 5 5 4 e 5 4 e 
            5 5 5 5 5 5 4 e 
            5 5 5 5 5 5 4 e 
            . 5 5 5 5 4 e . 
            `,img`
            . . 5 5 4 e . . 
            . 5 5 5 5 4 e . 
            . 5 5 e 5 4 e . 
            . 5 5 e 5 4 e . 
            . 5 5 e 5 4 e . 
            . 5 5 5 5 4 e . 
            . 5 5 5 5 4 e . 
            . . 5 5 4 e . . 
            `,img`
            . . . 5 e . . . 
            . . 5 5 4 e . . 
            . . 5 5 4 e . . 
            . . 5 5 4 e . . 
            . . 5 5 4 e . . 
            . . 5 5 4 e . . 
            . . 5 5 4 e . . 
            . . . 5 e . . . 
            `,img`
            . . . e . . . . 
            . . . 5 e . . . 
            . . . 5 e . . . 
            . . . 5 e . . . 
            . . . 5 e . . . 
            . . . 5 e . . . 
            . . . 5 e . . . 
            . . . e . . . . 
            `,img`
            . . . . e . . . 
            . . . e 5 . . . 
            . . . e 5 . . . 
            . . . e 5 . . . 
            . . . e 5 . . . 
            . . . e 5 . . . 
            . . . e 5 . . . 
            . . . . e . . . 
            `,img`
            . . . e 5 . . . 
            . . e 4 5 5 . . 
            . . e 4 5 5 . . 
            . . e 4 5 5 . . 
            . . e 4 5 5 . . 
            . . e 4 5 5 . . 
            . . e 4 5 5 . . 
            . . . e 5 . . . 
            `,img`
            . . e 4 5 5 . . 
            . e 4 5 5 5 5 . 
            . e 4 5 e 5 5 . 
            . e 4 5 e 5 5 . 
            . e 4 5 e 5 5 . 
            . e 4 5 5 5 5 . 
            . e 4 5 5 5 5 . 
            . . e 4 5 5 . . 
            `,img`
            . e 4 5 5 5 5 . 
            e 4 5 5 5 5 5 5 
            e 4 5 e 4 5 5 5 
            e 4 5 e 4 5 5 5 
            e 4 5 e 4 5 5 5 
            e 4 5 5 5 5 5 5 
            e 4 5 5 5 5 5 5 
            . e 4 5 5 5 5 . 
            `],
        100,
        true
        )
        scene.place(value, dineruchi_uchi)
    }
    scene.placeOnRandomTile(pepo, 15)
    scene.placeOnRandomTile(camarilla, 15)
    enemigillos()
    createWorm()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pepo.isHittingTile(CollisionDirection.Bottom)) {
        pepo.vy = -150
    }
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    michalachichacoin = info.score()
    cagarnivel(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dinero_papuardo, function (sprite, otherSprite) {
    info.changeScoreBy(999)
    otherSprite.destroy()
    music.playMelody("- - - - - - - - ", 499)
})
function createWorm () {
    sprites.destroyAllSpritesOfKind(SpriteKind.MnM)
    for (let value of scene.getTilesByType(9)) {
        mnm = sprites.create(img`
            . . 2 2 2 2 . . 
            . 2 2 2 2 2 2 . 
            2 2 2 1 1 2 2 2 
            2 2 1 2 2 1 2 2 
            2 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 . 
            . 3 . . . . 3 . 
            1 1 . . . . 1 1 
            `, SpriteKind.MnM)
        scene.place(value, mnm)
    }
}
function enemigillos () {
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
    for (let value of scene.getTilesByType(8)) {
        mosquito = sprites.create(img`
            . . . . . . . . 
            . f . . . d . . 
            . e e . d . . . 
            . . e e e 2 2 . 
            . e . . e 2 2 . 
            . . . e . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.place(value, mosquito)
        animation.runImageAnimation(
        mosquito,
        [img`
            . . . . . . . . 
            . f . . . d . . 
            . e e . d . . . 
            . . e e e 2 2 . 
            . e . . e 2 2 . 
            . . . e . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . f . . . . . . 
            . e e . d d . . 
            . . e e e 2 2 . 
            . e . . e 2 2 . 
            . . . e . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `],
        400,
        true
        )
        animation.runMovementAnimation(
        mosquito,
        animation.animationPresets(animation.bobbing),
        1000,
        true
        )
        pause(100)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        pepo.vy = -150
        otherSprite.destroy(effects.disintegrate, 1000)
    } else {
        info.setScore(michalachichacoin)
        cagarnivel(false)
    }
})
let mosquito: Sprite = null
let mnm: Sprite = null
let dineruchi_uchi: Sprite = null
let laba = 0
let michalachichacoin = 0
let camarilla: Sprite = null
let culletrever = 0
let pepo: Sprite = null
pepo = sprites.create(img`
    . 1 1 . 
    . 1 1 . 
    1 b b 1 
    . 1 1 . 
    1 . . 1 
    `, SpriteKind.Player)
scene.setBackgroundColor(3)
controller.moveSprite(pepo, 58, 0)
pepo.setStayInScreen(true)
pepo.ay = 500
culletrever = 0
camarilla = sprites.create(img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    `, SpriteKind.camiralla)
michalachichacoin = 0
cagarnivel(true)
game.onUpdate(function () {
    camarilla.y = pepo.y
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.MnM)) {
        value.vx = -10
        animation.runImageAnimation(
        mnm,
        [img`
            . . 2 2 2 2 . . 
            . 2 2 2 2 2 2 . 
            2 2 2 1 1 2 2 2 
            2 2 1 2 2 1 2 2 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            . d . . . . d . 
            1 1 . . . . 1 1 
            `,img`
            . . 2 2 2 2 . . 
            . 2 2 2 2 2 2 . 
            2 2 2 1 1 2 2 2 
            2 2 1 2 2 1 2 2 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            . . d . . d . . 
            . 1 1 . . 1 1 . 
            `],
        100,
        true
        )
    }
    pause(1000)
    for (let value of sprites.allOfKind(SpriteKind.MnM)) {
        value.vx = 10
    }
    pause(1000)
})
forever(function () {
    music.playMelody("D - G - C5 - E C ", 499)
})
forever(function () {
    if (pepo.y > laba) {
        info.setScore(michalachichacoin)
        cagarnivel(false)
    }
    if (camarilla.x - pepo.x > 79 && pepo.isHittingTile(CollisionDirection.Right)) {
        if (camarilla.x < tiles.tilemapColumns() * 8 - scene.screenWidth() / 2) {
            info.setScore(michalachichacoin)
            cagarnivel(false)
        }
    }
})
