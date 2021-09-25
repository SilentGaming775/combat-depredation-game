fightext_character.basicSet(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, "Tyler", function (player2) {
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Hurt, [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 2 e b f 4 4 2 e f . . 
        . f e e 2 d 2 1 f d 2 e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d 2 e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `], 500)
    fightext_character.setAbility(player2, fightext_character.abilityKind.rushspeed, 48)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Defence, img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Lie, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . f f d d f f . . . . . . 
        . . f f d d d d d d f f . . . . 
        f f d d d d d d d d d d f f . . 
        f d d d d d d d d d d d d d f f 
        f d f f d d f f f d f f d d d f 
        f d f f d d d f d d f f d d d f 
        f d f d f d f f f d f d d d d f 
        f d d d d d d d d d d d d d d f 
        f d d d f d d d d f d d d d d f 
        f d d d f d d f d f d d d d d f 
        f d d d f f d f d f f d d d d f 
        f d d d d d d d d d d d d d d f 
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageA, 29)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand1, img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ff............
        .......ffff2ff..........
        .....ffeeeef2ff.........
        ....ffeeeeef22ff........
        ....feeeeffeeeef........
        ....fffffee2222ef.......
        ...fffe222ffffe2f.......
        ...ffffffffeeefff.......
        ...fefe44ebf44eef.......
        ....fee4d4bfddef........
        .....feee4dddee.c.......
        ......f2222eeddeccccccc.
        ......f444e44ddecddddddc
        ......fffffeeee.ccccccc.
        .....ffffffff...c.......
        .....fff..ff............
        `, img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ff............
        .......ffff2ff..........
        .....ffeeeef2ff.........
        ....ffeeeeef22ff........
        ....feeeeffeeeef........
        ....fffffee2222ef.......
        ...fffe222ffffe2f.......
        ...ffffffffeeefff.......
        ...fefe44ebf44eef.......
        ....fee4d4bfddef........
        .....feee4dddee.c.......
        ......f2222eeddeccccccc.
        ......f444e44ddecddddddc
        ......fffffeeee.ccccccc.
        .....ffffffff...c.......
        .....fff..ff............
        `)
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Walk, [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `], 199)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Hitover, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e 2 f e f . . . f f . 
        . . f 2 e 2 e f e e f f f f f f 
        . f 2 2 e 2 f e 4 d d e 2 5 f f 
        . f f 2 e 2 f e 4 d d 4 2 5 f f 
        . f e f e 2 f e f f d e e f f . 
        . f e e f e f f b 1 e d d e f . 
        . f e e f e 2 f e 4 e d d e f . 
        . f e e e f 2 f 4 d e 4 e f f f 
        . . f e e f 2 f 4 4 e f f f f f 
        . . f f e f e f e e e . . f f . 
        . . . f f f f f f e f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Stand, img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.jumpspeed, 40)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg1, img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        .......ffffff...........
        .....ffeeeef2f..........
        ....ffeeeef222f.........
        ....feeeffeeeef...ccd...
        ....ffffee2222ef.cdcd...
        ....fe222ffffe2fcddcdd..
        ...fffffffeeeffcddcd1d..
        ...ffe44ebf44ecddcdd1dd.
        ...fee4d41fddecdcdddd1d.
        ....feee4dddedcccdddd1dd
        .....ffee44e4ddedddddd1d
        ......f222244ee.dddddd1d
        ......f2222e2f..dddddd1d
        ......f444455f..dddddddd
        .......ffffff...dddddddd
        ........fff......dddddd.
        `, img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        .......ffffff...........
        .....ffeeeef2f..........
        ....ffeeeef222f.........
        ....feeeffeeeef...ccd...
        ....ffffee2222ef.cdcd...
        ....fe222ffffe2fcddcdd..
        ...fffffffeeeffcddcd1d..
        ...ffe44ebf44ecddcdd1dd.
        ...fee4d41fddecdcdddd1d.
        ....feee4dddedcccdddd1dd
        .....ffee44e4ddedddddd1d
        ......f222244ee.dddddd1d
        ......f2222e2f..dddddd1d
        ......f444455f..dddddddd
        .......ffffff...dddddddd
        ........fff......dddddd.
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageB, 36)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand2, img`
        ........................
        ........................
        ........................
        ........................
        ...............fff......
        ..............fefffff...
        ........ff...feffffeff..
        ........fffffeeefefeef..
        ........fff42e44f2feeef.
        .........ff42ed4f2feeef.
        .........ff4244ef2efeef.
        ........fffe2dbbffefeeff
        ........ffe4edffef2eff2f
        .........fe4edd4ef2e22f.
        ..........edded4ef2e2ff.
        ..........eddeeefe2eff..
        ...........ee.fef2eff...
        ...............ffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, img`
        ........................
        ........................
        ........................
        ........................
        ...............fff......
        ..............fefffff...
        ........ff...feffffeff..
        ........fffffeeefefeef..
        ........fff42e44f2feeef.
        .........ff42ed4f2feeef.
        .........ff4244ef2efeef.
        ........fffe2dbbffefeeff
        ........ffe4edffef2eff2f
        .........fe4edd4ef2e22f.
        ..........edded4ef2e2ff.
        ..........eddeeefe2eff..
        ...........ee.fef2eff...
        ...............ffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg2, img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .......ff................
        ....ffff2ff..............
        ..ffeeeef2ff.............
        .ffeeeeef22ff............
        .feeeeffeeeef............
        .fffffee2222ef...........
        fffe222ffffe2f...........
        ffffffffeeefff...........
        fefe44ebf44eef...fffffff.
        .fee4d4bfddef...f.......f
        ..feee4dddee.c..f.fffff.f
        ...f2222eeddecccfcfc..f.f
        ...f444e44ddecddfdfdc.f.f
        ...fffffeeee.cccfcfc..f.f
        ..ffffffff...c..f.fffff.f
        ..fff..ff.......f.......f
        .................fffffff.
        .........................
        `, img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .......ff................
        ....ffff2ff..............
        ..ffeeeef2ff.............
        .ffeeeeef22ff............
        .feeeeffeeeef............
        .fffffee2222ef...........
        fffe222ffffe2f...........
        ffffffffeeefff...........
        fefe44ebf44eef...fffffff.
        .fee4d4bfddef...f.......f
        ..feee4dddee.c..f.fffff.f
        ...f2222eeddecccfcfc..f.f
        ...f444e44ddecddfdfdc.f.f
        ...fffffeeee.cccfcfc..f.f
        ..ffffffff...c..f.fffff.f
        ..fff..ff.......f.......f
        .................fffffff.
        .........................
        `)
})
fightext_character.basicSet(img`
    . . . . . . c c c c c c . . . . 
    . . . . . c 6 7 7 7 7 6 c . . . 
    . . . . c 7 7 7 7 7 7 7 7 c . . 
    . . . c 6 7 7 7 7 7 7 7 7 6 c . 
    . . . c 7 7 7 c 6 6 6 6 c 7 c . 
    . . . f 7 7 7 6 f 6 6 f 6 7 f . 
    . . . f 7 7 7 7 7 7 7 7 7 7 f . 
    . . c f 6 7 7 c 6 7 7 7 7 f . . 
    . c 7 7 f 6 7 7 c c c c f . . . 
    c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
    c c 6 7 7 6 c f c 7 7 2 7 7 c . 
    . . c 6 6 6 c c f 6 7 1 1 1 1 c 
    . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
    . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . f 6 6 6 1 1 1 1 1 1 6 f . 
    . . . . f c c c c c c c c c . . 
    `, "Shapeshifter", function (player2) {
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Hurt, [img`
        . . . c c c c c c c . . . . . . 
        . . c 7 f f 6 6 f f c . . . . . 
        . c 6 7 6 6 6 6 6 6 7 c . . . . 
        . c 7 7 7 7 7 7 7 7 7 7 c . . . 
        . c 7 7 7 6 1 f f 1 8 7 c . . . 
        . f 7 7 7 f 1 f f 1 f 6 f . . . 
        . f 7 7 7 f 2 2 2 2 f 6 f . . . 
        . f 6 7 7 f 2 2 2 2 f 6 c c . . 
        . . c f 7 7 2 2 2 2 7 7 7 7 c . 
        . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
        c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
        c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 6 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `,img`
        . . . d d d d d d d . . . . . . 
        . . d 8 4 4 6 6 4 4 d . . . . . 
        . d 7 8 4 4 6 6 4 4 8 d . . . . 
        . d 8 8 8 8 8 8 8 8 8 8 d . . . 
        . d 8 8 8 7 2 f f 2 8 8 d . . . 
        . f 8 8 8 f 2 f f 2 f 7 f . . . 
        . f 8 8 8 f 3 3 3 3 f 7 f . . . 
        . f 7 8 8 f 3 3 3 3 f 7 d d . . 
        . . d f 8 8 3 3 3 3 8 8 8 8 d . 
        . d 8 8 d d 8 8 8 8 8 2 2 2 8 d 
        d 8 8 8 7 d f 8 8 8 2 2 2 2 2 f 
        d d 7 7 7 d d f 7 2 2 2 2 2 2 f 
        . . d 7 7 7 d 7 7 2 2 2 2 2 7 f 
        . . d 7 7 7 7 7 7 2 2 2 2 2 7 f 
        . . . d 7 7 7 7 7 2 2 2 2 7 f . 
        . . . . d d d d d d d d f f . . 
        `,img`
        . . . c c c c c c c . . . . . . 
        . . c 7 2 2 6 6 2 2 c . . . . . 
        . c 6 7 2 2 6 6 2 2 7 c . . . . 
        . c 7 7 7 7 7 7 7 7 7 7 c . . . 
        . c 7 7 7 6 1 f f 1 8 7 c . . . 
        . f 7 7 7 f 1 f f 1 f 6 f . . . 
        . f 7 7 7 f 2 2 2 2 f 6 f . . . 
        . f 6 7 7 f 2 2 2 2 f 6 c c . . 
        . . c f 7 7 2 2 2 2 7 7 7 7 c . 
        . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
        c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
        c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 6 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `], 199)
    fightext_character.setAbility(player2, fightext_character.abilityKind.rushspeed, 47)
    fightext_character.setAbility(player2, fightext_character.abilityKind.jumpspeed, 39)
    fightext_character.setAbility(player2, fightext_character.abilityKind.walkspeed, 49)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageB, 24)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageA, 12)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand1, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c c c c c . . . . . . . . . . . 
        c 6 7 7 7 c c . . . . . . . . . 
        . c c 7 7 7 c c . . . . . . . . 
        . . . c 7 7 6 c . . . . . . . . 
        . . . c 6 6 6 c . . . . . . . . 
        . . c c 6 6 6 c c c c c c . . . 
        . c 6 6 6 c c 6 7 7 7 7 6 c . . 
        c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
        c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
        c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
        c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
        c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
        . c c 6 6 f 6 7 c 1 f f c 1 c . 
        . . . c c c c c c c c c c c c . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c c c c c . . . . . . . . . . . 
        c 6 7 7 7 c c . . . . . . . . . 
        . c c 7 7 7 c c . . . . . . . . 
        . . . c 7 7 6 c . . . . . . . . 
        . . . c 6 6 6 c . . . . . . . . 
        . . c c 6 6 6 c c c c c c . . . 
        . c 6 6 6 c c 6 7 7 7 7 6 c . . 
        c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
        c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
        c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
        c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
        c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
        . c c 6 6 f 6 7 c 1 f f c 1 c . 
        . . . c c c c c c c c c c c c . 
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg1, img`
        ........................
        ........................
        ..........bbbb..........
        ........bbddddbb........
        .......bddbbbbddb.......
        ......bdbbddddbbdb......
        .....bdbbdbbbbdbbdb.....
        .....bdbdbddddbdbdb.....
        .....cdbbdbbbbdbbdc.....
        .....cbdbbddddbbdbc.....
        .....efbddbbbbddbce.....
        .....eeffbddddbccee.....
        .....eeeeffcccceee......
        .....ceeeeeeeeeeee......
        .....ceeeeeeeeeeee......
        .....feeeeeeeeeeee......
        .....cceeeeeeeeeee......
        ......feeeeeeeeeee......
        .....6fceeeeeeeeee6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6666776...
        ..67768e67766777667776..
        ...668ee7768867788666...
        ......ee77eeee77ecee....
        ......ee6eeeeee6eef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeecf.....
        ......ceeeeeeeeeecf.....
        ......ceeeeeeeeeeff.....
        ......feeeeeeeeeefe.....
        .....6feeeeeeeeeef6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6667776...
        ..6776ee67777777667776..
        ...668ee7768867788666...
        ......ee77eeee67ee......
        ......ee6eeeeee6ce......
        ......eefeeeeeeece......
        ......eeceeeeeeece......
        ......eeceeeeeeefe......
        ......eeceeeeeeefe......
        ......eeeeeeeeeefe......
        ......eeeeeeeeeece......
        .....6eeeeeeeeeece6.....
        ....6776eeeeeeeee676....
        ...6776666eeee6766776...
        ..6776ee77777777667776..
        ...668ce7768867788666...
        ......ce77eeee67ee......
        ......ce6eeeeee6ee......
        ......ceeeeeeeeeee......
        ......fcceeeeeecee......
        ......fccceeececce......
        ......fcceeecceccc......
        ......fccceecceccc......
        ......fccccceceecc......
        .....6fccccccccccf6.....
        ....6776ccccccccc676....
        ...6776676cccc6766776...
        ..6776cc77777777667776..
        ...668cc7768867788666...
        ......cc77cccc67cf......
        ......cc6cccccc6cf......
        `, img`
        ........................
        ........................
        ..........bbbb..........
        ........bbddddbb........
        .......bddbbbbddb.......
        ......bdbbddddbbdb......
        .....bdbbdbbbbdbbdb.....
        .....bdbdbddddbdbdb.....
        .....cdbbdbbbbdbbdc.....
        .....cbdbbddddbbdbc.....
        .....efbddbbbbddbce.....
        .....eeffbddddbccee.....
        .....eeeeffcccceee......
        .....ceeeeeeeeeeee......
        .....ceeeeeeeeeeee......
        .....feeeeeeeeeeee......
        .....cceeeeeeeeeee......
        ......feeeeeeeeeee......
        .....6fceeeeeeeeee6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6666776...
        ..67768e67766777667776..
        ...668ee7768867788666...
        ......ee77eeee77ecee....
        ......ee6eeeeee6eef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeecf.....
        ......ceeeeeeeeeecf.....
        ......ceeeeeeeeeeff.....
        ......feeeeeeeeeefe.....
        .....6feeeeeeeeeef6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6667776...
        ..6776ee67777777667776..
        ...668ee7768867788666...
        ......ee77eeee67ee......
        ......ee6eeeeee6ce......
        ......eefeeeeeeece......
        ......eeceeeeeeece......
        ......eeceeeeeeefe......
        ......eeceeeeeeefe......
        ......eeeeeeeeeefe......
        ......eeeeeeeeeece......
        .....6eeeeeeeeeece6.....
        ....6776eeeeeeeee676....
        ...6776666eeee6766776...
        ..6776ee77777777667776..
        ...668ce7768867788666...
        ......ce77eeee67ee......
        ......ce6eeeeee6ee......
        ......ceeeeeeeeeee......
        ......fcceeeeeecee......
        ......fccceeececce......
        ......fcceeecceccc......
        ......fccceecceccc......
        ......fccccceceecc......
        .....6fccccccccccf6.....
        ....6776ccccccccc676....
        ...6776676cccc6766776...
        ..6776cc77777777667776..
        ...668cc7768867788666...
        ......cc77cccc67cf......
        ......cc6cccccc6cf......
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.defact, 1)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand2, img`
        . . . . . . c c c c c c . . . . 
        . . . . c c b b d d d d c . . . 
        . . . c c b b d d d d d d c . . 
        . . c b b d b d d d d d d b c . 
        . c b b b d b b d d d d d b c . 
        . c b b b d d b d d d d b b c . 
        c b c b b b d d b b b b b c c . 
        c b c c b b b b d d d b c c c . 
        c b b c c c c c c c c c c c c . 
        c c b b b b b b c c b d d d b c 
        c c c c c c c c c d d d d d d c 
        c c c c c c c b c b d d d d d b 
        c b b b c c c b c c b d d d c b 
        c c b b b c c b b c c c c b b c 
        c c c c c c c c b b b b b b c c 
        c c c c c c c c c c c c c c c c 
        `, img`
        . . . . . . c c c c c c . . . . 
        . . . . c c b b d d d d c . . . 
        . . . c c b b d d d d d d c . . 
        . . c b b d b d d d d d d b c . 
        . c b b b d b b d d d d d b c . 
        . c b b b d d b d d d d b b c . 
        c b c b b b d d b b b b b c c . 
        c b c c b b b b d d d b c c c . 
        c b b c c c c c c c c c c c c . 
        c c b b b b b b c c b d d d b c 
        c c c c c c c c c d d d d d d c 
        c c c c c c c b c b d d d d d b 
        c b b b c c c b c c b d d d c b 
        c c b b b c c b b c c c c b b c 
        c c c c c c c c b b b b b b c c 
        c c c c c c c c c c c c c c c c 
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg2, img`
        ........................
        ........................
        ........................
        .................cc.....
        .............cccc63c....
        ...........cc633336cc...
        ..........c6666333333c..
        ..........c6666633333c..
        .......cc.cccc666333cc..
        ......c55ccc55c66666cc..
        ......ff5ccc5ff663333c..
        ......ff5ccc5ff633333c..
        ..bbbbbbbb5555c333333c..
        .c55c555554ccccc3c45c...
        c55c55555545554cccc5c...
        ccccccccccccccccc.ccc...
        `, img`
        ........................
        ........................
        ........................
        .................cc.....
        .............cccc63c....
        ...........cc633336cc...
        ..........c6666333333c..
        ..........c6666633333c..
        .......cc.cccc666333cc..
        ......c55ccc55c66666cc..
        ......ff5ccc5ff663333c..
        ......ff5ccc5ff633333c..
        ..bbbbbbbb5555c333333c..
        .c55c555554ccccc3c45c...
        c55c55555545554cccc5c...
        ccccccccccccccccc.ccc...
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Defence, img`
        . . . . . . . . b b b b b . . . 
        . . . . . . b b d d d d b b . . 
        . . . . . b d d d d d d d c . . 
        . . . . c d d d d d d d d c . . 
        . . . c b d d d d d d d b c c . 
        . . . c b b d d d d b c c c c . 
        . . c c d b b b c c c c c c c . 
        . . c c c d d d d c c d d d c c 
        . c d b c c b b c c d d d d d c 
        . c b d d b b b c c d d d d d c 
        . c c b b b b c b c b d d d b c 
        c b b c c c c c b b b b b c c c 
        c c b b c c c c c d d d d d b c 
        c c c c c c b b b b b c c c c c 
        c c c c c c c b b b b b c c c c 
        c c c c c c c c b b b b b c c c 
        `)
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Walk, [img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 7 7 7 7 6 c . . . 
        . . . . c 7 7 7 7 7 7 7 7 c . . 
        . . . c 6 7 7 7 7 7 7 7 7 6 c . 
        . . . c 7 7 7 c 6 6 6 6 c 7 c . 
        . . . f 7 7 7 6 f 6 6 f 6 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . c f 6 7 7 c 6 7 7 7 7 f . . 
        . c 7 7 f 6 7 7 c c c c f . . . 
        c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
        c c 6 7 7 6 c f c 7 7 2 7 7 c . 
        . . c 6 6 6 c c f 6 7 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `,img`
        . . . . . . . c c c c c c . . . 
        . . . . . . c 6 7 7 7 7 6 c . . 
        . . . . . c 7 7 7 7 7 7 7 7 c . 
        . . . . c 6 7 7 7 7 7 7 7 7 6 c 
        . . . . c 7 7 7 c 6 6 6 6 c 7 c 
        . . . . f 7 7 7 6 f 6 6 f 6 7 f 
        . . . . f 7 7 7 7 7 7 7 7 7 7 f 
        . . . . f 6 7 7 c 6 7 7 7 7 f . 
        . . c c c f 6 7 7 c c c c f . . 
        . c 7 7 7 c c f 7 7 7 2 6 c . . 
        c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
        c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
        . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
        . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
        . . c c 6 6 7 1 1 1 1 1 6 c . . 
        . . . c c c c c c c c c c . . . 
        `], 200)
    fightext_skill.defaultSkill(player2)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Hitover, img`
        . . . c c c c c c c . . . . . . 
        . . c 7 3 5 5 3 2 5 c . . . . . 
        . c 6 7 4 3 5 4 3 5 7 c . . . . 
        . c 7 7 7 7 1 1 7 7 7 7 c . . . 
        . c 2 7 7 6 1 1 f 1 8 7 c . . . 
        . f 7 7 7 f 1 1 6 1 f 6 f . . . 
        . 5 f 5 7 f 1 1 2 2 f 6 f . . . 
        . 5 f 5 7 f 1 1 6 2 f 6 c c . . 
        . 5 f 9 9 9 2 2 8 8 8 8 8 7 c . 
        . c 7 9 9 4 7 7 8 8 8 8 8 1 7 c 
        c 7 7 9 9 1 f 7 8 8 8 2 8 1 1 f 
        c c 6 6 6 c c f 8 8 8 8 8 1 1 f 
        . . c 6 6 6 c 6 8 8 8 8 8 1 6 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 6 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Lie, img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 1 8 8 8 8 1 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 
        8 8 1 8 8 8 8 1 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `)
})
fightext_character.basicSet(img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `, "Jacob W.", function (player2) {
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Hurt, [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 f e . . . 
        . . . . e f 2 2 2 2 f 2 e . . . 
        . . . . e 2 f 2 2 2 2 2 e . . . 
        . . . . e f 2 f 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . e e e f e 2 2 b f f f d c . 
        . e e 2 f d f e 2 1 1 1 f b c . 
        . e e f 2 d f e e e c f c . . . 
        . b 1 1 d e f 2 e e c . . . . . 
        . . f f f d d f 2 f d d . . . . 
        . . . f f d d e e f d d . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `])
    fightext_character.setAbility(player2, fightext_character.abilityKind.rushspeed, 57)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Defence, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e e 2 2 e f f f f b c 
        . . . e e e f e 2 2 e f f f d c 
        . . e e 2 2 d f e 2 c b 4 4 c c 
        . . e e 2 2 d f e c 4 1 1 4 c . 
        . . b 1 1 d e e e c 4 4 4 4 c . 
        . . . f f f f f d d 4 4 4 b c . 
        . . . . f f f f d d c c c c . . 
        . . . . . f f f f f c c c . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand1, img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e d d f d d f . . 
        . f f e 2 2 2 2 d d f d d f . . 
        . . f f d d 2 2 . . . . . . . . 
        . . f f d d e e . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `, img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e d d f d d f . . 
        . f f e 2 2 2 2 d d f d d f . . 
        . . f f d d 2 2 . . . . . . . . 
        . . f f d d e e . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg1, img`
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 . . . . . . 
        . . . e 2 2 d 2 2 2 2 . . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . c c f f e 2 2 2 2 2 e . . . . 
        . c b f f f f e 2 2 e e . . . . 
        . c d f f f b 2 e f e e e . . . 
        . c b 1 1 1 1 2 f d 2 2 e e . . 
        . . . c c c e e f d 2 2 e e . . 
        . . . . . c e e 2 e d 1 1 b . . 
        . . . . . . . f d d f f f f . . 
        . . . . . . . . d d f f f f f f 
        . . . . . . . . e f f f . f f f 
        . . . . . . . e e e . . . . f f 
        . . . . . . e e e e . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 . . . . . . 
        . . . e 2 2 d 2 2 2 2 . . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . c c f f e 2 2 2 2 2 e . . . . 
        . c b f f f f e 2 2 e e . . . . 
        . c d f f f b 2 e f e e e . . . 
        . c b 1 1 1 1 2 f d 2 2 e e . . 
        . . . c c c e e f d 2 2 e e . . 
        . . . . . c e e 2 e d 1 1 b . . 
        . . . . . . . f d d f f f f . . 
        . . . . . . . . d d f f f f f f 
        . . . . . . . . e f f f . f f f 
        . . . . . . . e e e . . . . f f 
        . . . . . . e e e e . . . . . . 
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand2, img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 2 e . . 
        . . . . . . . . 2 2 2 2 d 2 2 e . 
        . . . . . . . e 2 2 2 2 2 2 2 e . 
        . . . . . . . e 2 2 2 2 2 2 2 e . 
        . . . . . . . e 2 2 2 2 2 e f f c 
        . . . . . . . e e 2 2 e f f f f b 
        . . . . . e e e f e 2 2 b f f f d 
        . . . . e e 2 2 d f e 2 1 1 1 1 b 
        . . . . e e 2 2 d f e e e c c c . 
        . . . . b 1 1 d e 2 2 e e c . . . 
        . . . . . f f f d d 2 2 f d d . . 
        . . . . . . f f d d e e f d d . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . . e e e f f . . . . . . 
        . . . . . . e e e e f f . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 2 e . . 
        . . . . . . . . 2 2 2 2 d 2 2 e . 
        . . . . . . . e 2 2 2 2 2 2 2 e . 
        . . . . . . . e 2 2 2 2 2 2 2 e . 
        . . . . . . . e 2 2 2 2 2 e f f c 
        . . . . . . . e e 2 2 e f f f f b 
        . . . . . e e e f e 2 2 b f f f d 
        . . . . e e 2 2 d f e 2 1 1 1 1 b 
        . . . . e e 2 2 d f e e e c c c . 
        . . . . b 1 1 d e 2 2 e e c . . . 
        . . . . . f f f d d 2 2 f d d . . 
        . . . . . . f f d d e e f d d . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . . e e e f f . . . . . . 
        . . . . . . e e e e f f . . . . . 
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg2, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . b e e . . . . . . . 
        . . . . . f 1 e e e . . . . . . 
        . e e . f f 1 2 2 e . . . . . . 
        . e e f f f d 2 2 e e e e e . . 
        . e e f d d e d d f e 2 2 2 2 . 
        . e f f d d 2 f f e 2 2 2 2 2 2 
        . f f f e 2 2 e e 2 2 2 2 2 2 2 
        . f . f e 2 e e 2 2 e 2 2 2 2 2 
        . . . . f f e e 1 b f 2 2 2 d 2 
        . . . . d d c c 1 f f e 2 2 2 2 
        . . . . d d . c 1 f f f 2 2 2 e 
        . . . . . . . c 1 f f f e e e . 
        . . . . . . . . b d b c . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . b e e . . . . . . . 
        . . . . . f 1 e e e . . . . . . 
        . e e . f f 1 2 2 e . . . . . . 
        . e e f f f d 2 2 e e e e e . . 
        . e e f d d e d d f e 2 2 2 2 . 
        . e f f d d 2 f f e 2 2 2 2 2 2 
        . f f f e 2 2 e e 2 2 2 2 2 2 2 
        . f . f e 2 e e 2 2 e 2 2 2 2 2 
        . . . . f f e e 1 b f 2 2 2 d 2 
        . . . . d d c c 1 f f e 2 2 2 2 
        . . . . d d . c 1 f f f 2 2 2 e 
        . . . . . . . c 1 f f f e e e . 
        . . . . . . . . b d b c . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Hitover, img`
        . . . . . e e e e f f f . . . . 
        . . . . . e e e f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f d d e e f f d d . 
        . . . . . f f d d 2 2 f f d d . 
        . . . . f f e 2 2 2 2 e . . . . 
        . . . b 1 1 d e 2 2 e e c . . . 
        . . . e e 2 2 d f e e c c c . . 
        . . . e e 2 2 d f 2 1 1 1 1 b c 
        . . . . e e e f e 2 b f f f d c 
        . . . . . e e 2 2 e f f f f b c 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Lie, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c f c c . . . . . . . . 
        . . . . c b f b . . . . . . . . 
        . e e e f f f f c . . . . . . . 
        e f f 2 f f f 1 f c . . . . . . 
        2 2 f 2 e f f f f e e . . . . f 
        f f f 2 2 f b 1 f e 2 2 e . f f 
        f f f f 2 e 2 2 e f f 2 e f f f 
        2 2 f 2 f 2 e f f f 2 d d f f e 
        2 2 f 2 2 2 f d d f f d d f e e 
        . 2 2 f 2 e e 2 f d e f f f e e 
        . . e e e e e f 2 1 f f f . e e 
        `)
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Walk, [img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . . e e e f e 2 b f f f d c . 
        . . e e 2 2 d f 2 1 1 1 1 b c . 
        . . e e 2 2 d f e e c c c . . . 
        . . b 1 1 d e 2 e e c . . . . . 
        . . f f f f d d f . . . . . . . 
        f f f f f f d d . . . . . . . . 
        f f f . f f f e . . . . . . . . 
        f f . . . . e e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . e e e f e 2 2 b f f f d c . 
        . e e 2 2 d f e 2 1 1 1 1 b c . 
        . e e 2 2 d f e e e c c c . . . 
        . b 1 1 e e 2 2 e e c . . . . . 
        . . f d d 2 2 2 f f f d d . . . 
        e e f d d e e e . f f d d . . . 
        e e e f f f f f . . . . . . . . 
        e e . . . . f f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e e 2 2 e f f f f b c 
        . . . e e e f e 2 2 b f f f d c 
        . . e e 2 2 d f e 2 1 1 1 1 b c 
        . . e e 2 2 d f e e e c c c . . 
        . . b 1 1 d e 2 2 e e c . . . . 
        . . . f f f d d 2 2 f d d . . . 
        . . . . f f d d e e f d d . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `], 200)
    fightext_skill.defaultSkill(player2)
})
fightext_character.basicSet(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . d . . . . . . . . . 
    . . . . . d . d 1 . . . . . . . 
    . . . . . . d 1 1 1 1 . . . . . 
    . . . . . . d 1 f 1 f 1 . . . . 
    . . . . . d 1 1 f 1 f 1 . . . . 
    . . . . . d 1 1 1 1 1 1 . . . . 
    . . . . . d 1 1 f f f . . . . . 
    . . d d d 1 1 1 1 1 1 1 1 1 . . 
    . d d 1 1 1 1 1 1 1 1 1 1 1 1 . 
    d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    d d d d 1 1 1 1 1 1 1 1 1 1 1 1 
    `, "Blobber", function (player2) {
    fightext_character.setAbility(player2, fightext_character.abilityKind.walkspeed, 32)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageA, 19)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageB, 13)
    fightext_character.setAbility(player2, fightext_character.abilityKind.rushspeed, 42)
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Hurt, [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d . . . . . . . . . 
        . . . . . d . d 1 . . . . . . . 
        . . . . . . d 1 1 1 1 . . . . . 
        . . . . . . d 1 b 1 b 1 . . . . 
        . . . . . d 1 1 b 1 b 1 . . . . 
        . . . . . d 1 b 1 1 1 b . . . . 
        . . . . . d 1 1 1 1 1 1 . . . . 
        . . d d d 1 1 b b b b 1 1 1 . . 
        . d d 1 1 1 b 1 d d d 1 1 1 1 . 
        d d 1 1 1 1 1 d b b b d 1 1 1 1 
        d d 1 1 1 1 1 d b b b d 1 1 1 1 
        d d d d 1 1 1 1 d d d 1 1 1 1 1 
        `])
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand1, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 1 1 1 . . . 
        . . . . . . 1 1 1 1 1 1 f . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 f . . . 
        . . . . . . 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 f . . . 
        . . . . . . . 1 1 f 1 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 1 1 1 . . . 
        . . . . . . 1 1 1 1 1 1 f . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 f . . . 
        . . . . . . 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 f . . . 
        . . . . . . . 1 1 f 1 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg1, img`
        1 d d . . . . . . . . . . . . . 
        1 1 1 d . . . 1 . . . . . . . . 
        1 1 1 1 d . . . . 1 . . . . . . 
        1 1 1 1 1 d . . 1 . . . . . . . 
        1 1 1 1 1 1 d . . . . . . . . . 
        1 1 1 1 1 1 1 d . . . . . . . . 
        1 . 1 1 1 1 1 1 d . . . . . . . 
        1 . 1 1 1 1 1 1 1 d . . . d d . 
        1 . . 1 1 1 1 1 1 1 d . d 1 1 d 
        . . . 1 1 1 1 1 1 1 1 d 1 1 1 d 
        . . . 1 1 1 . 1 1 1 1 1 1 1 d . 
        . . . 1 . 1 . 1 1 1 1 1 1 d . . 
        . . . . . 1 . 1 . 1 1 1 1 d . . 
        . . . . . . . 1 . 1 1 1 d 1 . . 
        . . . . . . . . . 1 . d . 1 . . 
        . . . . . . . . . 1 . 1 . . . . 
        `, img`
        1 d d . . . . . . . . . . . . . 
        1 1 1 d . . . 1 . . . . . . . . 
        1 1 1 1 d . . . . 1 . . . . . . 
        1 1 1 1 1 d . . 1 . . . . . . . 
        1 1 1 1 1 1 d . . . . . . . . . 
        1 1 1 1 1 1 1 d . . . . . . . . 
        1 . 1 1 1 1 1 1 d . . . . . . . 
        1 . 1 1 1 1 1 1 1 d . . . d d . 
        1 . . 1 1 1 1 1 1 1 d . d 1 1 d 
        . . . 1 1 1 1 1 1 1 1 d 1 1 1 d 
        . . . 1 1 1 . 1 1 1 1 1 1 1 d . 
        . . . 1 . 1 . 1 1 1 1 1 1 d . . 
        . . . . . 1 . 1 . 1 1 1 1 d . . 
        . . . . . . . 1 . 1 1 1 d 1 . . 
        . . . . . . . . . 1 . d . 1 . . 
        . . . . . . . . . 1 . 1 . . . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Defence, img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ......d.....................................................
        .....d.f1..f................................................
        ......d1f1f.................................................
        ......d1f1f1................................................
        .....d11f1f1................................................
        .....d111111................................................
        .....d1ffff.................................................
        ..ddd111ff1111..............................................
        .dd111111111111.............................................
        dd11111111111111............................................
        dd11111111111111............................................
        dddd111111111111.11..1111..1.....111.....1...11....1.11.....
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand2, img`
        . . . . . d d d d d d d d . . . 
        . . . . d d d d d d d d d d . . 
        . . . d d d d d d d d d d d . . 
        . . . d d d d d d . . . d d d . 
        . . . d d . . . . d d . . d d . 
        . . . d d d d d d d . . . d d . 
        . . . d d d d d . . d . . . . . 
        . . . d d d d d d . . . . . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d d . . . . d d . . d 
        . . . d d d d d d d d . . . d d 
        . . . d d d d d . . . . . d d . 
        . . . d d d d d d d . . d d d . 
        . . . d d d d d d d d d d d . . 
        . . . d d d d d d d d d d . . . 
        . . . . d d d d . . d d . . . . 
        `, img`
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 . . . 1 1 1 . 
        . . . 1 1 . . . . 1 1 . . 1 1 . 
        . . . 1 1 1 1 1 1 1 . . . 1 1 . 
        . . . 1 1 1 1 1 . . 1 . . . . . 
        . . . 1 1 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 . . . . 1 1 . . 1 
        . . . 1 1 1 1 1 1 1 1 . . . 1 1 
        . . . 1 1 1 1 1 . . . . . 1 1 . 
        . . . 1 1 1 1 1 1 1 . . 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 . . 1 1 . . . . 
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg2, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . d . . . . . . . 
        . . . . . . . b d d . . . . . . 
        . . . . . . 1 1 b d d . . . . . 
        . . . . . 1 1 1 1 b d d . . . . 
        . . . . 1 1 1 1 1 b d d . . . . 
        . . . 1 1 1 1 1 1 1 b d d . . . 
        . . . 1 1 1 1 1 1 1 b d d . . . 
        . . 1 1 1 1 1 1 1 1 1 b d d . . 
        . 1 1 1 1 1 1 1 1 1 1 1 b d . . 
        1 1 1 1 1 1 1 1 1 1 1 1 b d d . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 b d 1 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . d . . . . . . . 
        . . . . . . . b d d . . . . . . 
        . . . . . . 1 1 b d d . . . . . 
        . . . . . 1 1 1 1 b d d . . . . 
        . . . . 1 1 1 1 1 b d d . . . . 
        . . . 1 1 1 1 1 1 1 b d d . . . 
        . . . 1 1 1 1 1 1 1 b d d . . . 
        . . 1 1 1 1 1 1 1 1 1 b d d . . 
        . 1 1 1 1 1 1 1 1 1 1 1 b d . . 
        1 1 1 1 1 1 1 1 1 1 1 1 b d d . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 b d 1 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Lie, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . 1 . 
        . . . 1 . . . 1 . 1 . . . . 1 1 
        . f 1 1 1 . 1 1 1 . . . 1 1 1 1 
        . 1 1 1 f f 1 1 1 . . 1 1 f f f 
        . 1 1 1 f f 1 1 . . 1 1 1 f f f 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Hitover, img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . 1 . . . 1 . 
        . . . 1 . . . . 1 1 . . 1 1 . . 
        . . . 1 . . 1 1 . . 1 1 . 1 1 . 
        . . . 1 . 1 . . . 1 . . . 1 1 . 
        . . . 1 . . 1 1 1 . . . . . . . 
        . . . . . . 1 . . . . . 1 1 . . 
        . . . . . 1 1 . . 1 1 1 1 f . . 
        . . . . . 1 1 . . . 1 1 . . . . 
        . . . . . . . 1 1 . 1 1 . 1 . . 
        . . . . . . . . . 1 1 . . . 1 1 
        . 1 1 . . 1 . . . 1 . 1 1 . . 1 
        . f 1 . . . 1 . . 1 1 . . 1 1 . 
        . . . . . . . 1 . 1 1 . . . . . 
        . . . . . . . . . . . 1 . . 1 1 
        . . . . . . . . . . . . 1 1 . . 
        `)
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Walk, [img`
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . d . . . . . . . . . . 
        . . . . . . d . d 1 . . . . . . . . 
        . . . . . . . d 1 1 1 1 . . . . . . 
        . . . . . . . d 1 f 1 f 1 . . . . . 
        . . . . . . d 1 1 f 1 f 1 . . . . . 
        . . . . . . d 1 1 1 1 1 1 . . . . . 
        . . . . . . d 1 1 f f f . . . . . . 
        . . . d d d 1 1 1 1 1 1 1 1 1 . . . 
        . d d d 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . d d d 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . d . . . . . . . . . . 
        . . . . . . d . d 1 . . . . . . . . 
        . . . . . . . d 1 1 1 1 . . . . . . 
        . . . . . . . d 1 f 1 f 1 . . . . . 
        . . . . . . d 1 1 f 1 f 1 . . . . . 
        . . . . . . d 1 1 1 1 1 1 . . . . . 
        . . . . . . d 1 1 f f f . . . . . . 
        . . . d d d 1 1 1 1 1 1 1 1 1 . . . 
        . . d d 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . d d d d 1 1 1 1 1 1 1 1 1 1 1 1 . 
        `,img`
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . d . . . . . . . . . 
        . . . . . . . d . d 1 . . . . . . . 
        . . . . . . . . d 1 1 1 1 . . . . . 
        . . . . . . . . d 1 f 1 f 1 . . . . 
        . . . . . . . d 1 1 f 1 f 1 . . . . 
        . . . . . . . d 1 1 1 1 1 1 . . . . 
        . . . . . . . d 1 1 f f f . . . . . 
        . . . . d d d 1 1 1 1 1 1 1 1 1 . . 
        . . . d d 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . d d d d 1 1 1 1 1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . d . . . . . . . . 
        . . . . . . . . d . d 1 . . . . . . 
        . . . . . . . . . d 1 1 1 1 . . . . 
        . . . . . . . . . d 1 f 1 f 1 . . . 
        . . . . . . . . d 1 1 f 1 f 1 . . . 
        . . . . . . . . d 1 1 1 1 1 1 . . . 
        . . . . . . . . d 1 1 f f f . . . . 
        . . d d d d d d 1 1 1 1 1 1 1 1 1 . 
        . d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 
        `])
})
fightext_character.basicSet(img`
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    `, "Cube", function (player2) {
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand1, img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `, img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Defence, img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Lie, img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Hitover, img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `)
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Hurt, [img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `])
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Walk, [img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `])
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand2, img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `, img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg1, img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `, img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg2, img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `, img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `)
})
fightext_character.basicSet(img`
    f f f . . . . . . . . f f f . . 
    c b b c f . . . . . . c c f f . 
    . c b b c f . . . . . . c c f f 
    . c c c b f . . . . . . c f c f 
    . c c b b c f . c c . c c f f f 
    . c b b c b f c c 3 c c 3 c f f 
    . c b c c b f c b 3 c b 3 b f f 
    . . c c c b b c b b b b b b c . 
    . . . c c c c b b 1 b b b 1 c . 
    . . . . c c b b b b b b b b b c 
    . . . . f b b b b c b b b c b c 
    . . . c f b b b b 1 f f f 1 b f 
    . . c c f b b b b b b b b b b f 
    . . . . f c b b b b b b b b f . 
    . . . . . f c b b b b b b f . . 
    . . . . . . f f f f f f f . . . 
    `, "Cave Bat", function (player2) {
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Hurt, [img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . c c c f f 
        . c b b b f f c c 3 c c 3 c c f 
        . c c c b b f c f 3 c b 3 c f c 
        . c c b c b f c b f b b b f c c 
        . c b b c b b c b 2 b b b 2 c c 
        . c b c c c b b b b b b b b b c 
        . . c c c c c b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f c 
        . . . c f b b b b f f f f f f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b 2 2 2 2 2 f . 
        . . . . . f c b b b 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `], 100)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand1, img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . c c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 c f f 
        . c c b c b f c b b b b b b c f 
        . c b b c b b c b 1 b b b 1 c c 
        . c b c c c b b b b b b b b b c 
        . . c c c c c b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f c 
        . . . c f b b b b f f f f f f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b 2 2 2 2 2 f . 
        . . . . . f c b b b 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . c c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 c f f 
        . c c b c b f c b b b b b b c f 
        . c b b c b b c b 1 b b b 1 c c 
        . c b c c c b b b b b b b b b c 
        . . c c c c c b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f c 
        . . . c f b b b b f f f f f f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b 2 2 2 2 2 f . 
        . . . . . f c b b b 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Defence, img`
        ................................................................
        ..fff........fff................................................
        ..cbbcf.......cff...............................................
        ...cbbcf......ccf...............................................
        ...cccbf.......fc...............................................
        ...ccbbff.....ffc...............................................
        ...cbbcbfcc.ccfff...............................................
        ...cbccbfcccccfff...............................................
        ....cccbcb3cc3cf................................................
        ....ccccbb3cb3bc................................................
        .....ccbbbbbbbbcc...............................................
        ....cfbbb11bbb11c...............................................
        ...ccfbbbbbbbbbbf...............................................
        .....fbbbbcbbbcbf...............................................
        .....fcbbb1fff1f................................................
        ......fcbbbbbbf.................................................
        .......fffffff..................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageA, 2)
    fightext_character.setAbility(player2, fightext_character.abilityKind.hitrecA, 5)
    fightext_character.setAbility(player2, fightext_character.abilityKind.downtime, 5)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Lie, img`
        c c c c . . . . . . . . . . . . 
        . c c c c c f f f f f f f . . . 
        . . c b b c c f f b 2 2 2 f . . 
        . . . c b b c c b 2 2 2 2 2 f . 
        . . c c c b b f b f 2 2 2 2 f f 
        . . . c c c c f b f f f f f f f 
        . . . b b b c c b f 1 f f 1 f f 
        . . . f f f f b b c 1 f f 1 b c 
        . . . f f f c b b b b b b b b c 
        . . . . f f b b b 1 b b b 1 c c 
        . . . . f f b b b b b b b b c f 
        . . . . . c c c b 3 c b 3 c f . 
        . . . . . . c c c 3 c c 3 f . . 
        . . . . . . . . c c . c c . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Stand, img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b b 1 b b b 1 b c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.hitrecA, 1)
    fightext_character.setAbility(player2, fightext_character.abilityKind.jumpspeed, 200)
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Walk, [img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b b b b b b c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c b b b c b c 
        . . . c f b b b b 1 f f f 1 b f 
        . . c c f b b b b b b b b b b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . . c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 b f f 
        . c c b c b f c b b b b b b c . 
        . c b b c b b c b b b b b b c . 
        . c b c c c b b b 1 b b b 1 b c 
        . . c c c c c b b b b b b b b c 
        . . . c f b b b b c b b b c b f 
        . . c c f b b b b 1 f f f 1 b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . c c . . 
        . . . . . . c c c 3 c c 3 c . . 
        . . . . . c c c b 3 c b 3 b c . 
        . . . . f f b b b b b b b b c . 
        . . . . f f b b b b b b b b c c 
        . . . f f f c b b 1 b b b 1 b c 
        . . . f f f f b b b b b b b b c 
        . . . b b b c c b c b b b c b f 
        . . . c c c c f b 1 f f f 1 b f 
        . . . c c b b f b b b b b b f . 
        . . . c b b c c b b b b b f c c 
        . . c b b c c f f f f f f c c c 
        . c c c c c . . . . . . c c c . 
        c c c c . . . . . . . c c c . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b b 1 b b b 1 b c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `], 100)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand2, img`
        .ff......ffff..fff..
        ....fff........ccfff
        fff.cbbcf...cc.cccff
        .....cbbbffcc3cc3cff
        .....cccbbfcb3cb3cff
        ffff.ccbcbfcbbbbbbcf
        .....cbbcbbcb1bbb1cc
        .....cbcccbbbbbbbbbc
        .fff..cccccbbc1ff1bc
        .......cfbbbbf1ff1fc
        ....ff.cfbbbbfffffff
        ......ccfbbbbf2222ff
        ffff..fffcbbb22222f.
        .........fcbbb222f..
        ....fffff.fffffff...
        ....................
        ....................
        ..fff...............
        ....................
        ....................
        `, img`
        .ff......ffff..fff..
        ....fff........ccfff
        fff.cbbcf...cc.cccff
        .....cbbbffcc3cc3cff
        .....cccbbfcb3cb3cff
        ffff.ccbcbfcbbbbbbcf
        .....cbbcbbcb1bbb1cc
        .....cbcccbbbbbbbbbc
        .fff..cccccbbc1ff1bc
        .......cfbbbbf1ff1fc
        ....ff.cfbbbbfffffff
        ......ccfbbbbf2222ff
        ffff..fffcbbb22222f.
        .........fcbbb222f..
        ....fffff.fffffff...
        ....................
        ....................
        ..fff...............
        ....................
        ....................
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Hitover, img`
        . . . . . . . . . . . . . . . c 
        . . . . . . . . . . . . . . c c 
        . . . . . . . . . . . c . c c c 
        . . . . . . . f f b c c c b c c 
        . . . . . f f f f b c c b b c . 
        . . . . c f f f f b c b b c c . 
        . . . c c b b c f c c b c c f . 
        . . . c c b b b b c f f c f f . 
        . . c c b b b b b b b b b f f . 
        . . c 3 3 b 1 b c f f f 2 b f . 
        . . . c c b b b 1 1 f 2 2 2 f . 
        . . c c b b b b f f f 2 2 2 f . 
        . . c 3 3 b b b f f f 2 2 2 f . 
        . . . f c b 1 b 1 1 f 2 2 f . . 
        . . . . f c c b b f f f f . . . 
        . . . . . f c c c f f f . . . . 
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg2, img`
        . . . . . . . . . . . . . . . . 
        7 . . . . . . . . . . . . . . . 
        . 7 7 . . . . . . . . . . . . . 
        7 7 7 7 2 2 2 2 2 2 2 2 . 7 7 7 
        2 . . 7 7 7 7 7 7 7 7 2 . 7 . . 
        . 2 2 2 7 7 . . 7 7 7 2 7 7 . . 
        . . 2 2 . 7 7 7 7 7 7 2 2 . 7 7 
        . . . . . . . 7 7 . 7 7 7 7 7 . 
        2 2 7 7 7 7 . . 7 7 7 . . 7 7 7 
        . 2 2 . . 7 7 7 2 7 7 2 . 7 2 2 
        7 7 2 2 2 2 2 2 . . 7 7 7 7 2 . 
        . . . . . . . . . . . 2 . . 2 . 
        . . . . . . . . . . . 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        7 . . . . . . . . . . . . . . . 
        . 7 7 . . . . . . . . . . . . . 
        7 7 7 7 2 2 2 2 2 2 2 2 . 7 7 7 
        2 . . 7 7 7 7 7 7 7 7 2 . 7 . . 
        . 2 2 2 7 7 . . 7 7 7 2 7 7 . . 
        . . 2 2 . 7 7 7 7 7 7 2 2 . 7 7 
        . . . . . . . 7 7 . 7 7 7 7 7 . 
        2 2 7 7 7 7 . . 7 7 7 . . 7 7 7 
        . 2 2 . . 7 7 7 2 7 7 2 . 7 2 2 
        7 7 2 2 2 2 2 2 . . 7 7 7 7 2 . 
        . . . . . . . . . . . 2 . . 2 . 
        . . . . . . . . . . . 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
fightext_character.basicSet(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, "Skelly", function (player2) {
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Hurt, [img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb1111ff........
        ......fb1111111bf.......
        ......f111111111f.......
        .....ffff11f1f1fdf......
        ....fb111c1df111ff......
        ....ffb1b1ffdf1fbf......
        .....ffbfbfb11111f......
        ......ffffcfdb1b1f......
        .......fcccfcfbfbf......
        ........ffffffffff......
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `], 500)
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Walk, [img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `], 199)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Defence, img`
        ........................
        ........................
        ........................
        ........................
        .......fffff............
        .....ffb1111ff..........
        ....fb1111111bf.........
        ....f111111111f.........
        ...ffff1111111df........
        ..fb111c1dd111df........
        ..ffb1b1fdcf11bf........
        ...ffbfbfb11111f........
        ....ffffcfdb1b1f........
        .....fcccfcfbfbf........
        ......ffffffffff........
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.rushspeed, 99)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand1, img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageA, 7)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg1, img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ......ff....fffff.......
        .....ff....fcbdddff.....
        .....ffffffcbdddddbf....
        .....ffffbfbbddd111f....
        .....fffb1fbbdd11111f...
        .....ffb11f1ddd11111f...
        ......ffb1f1cbd11111f...
        ......fb1c11ff111111f...
        .......fffb1dd11111f....
        ........fb11d11111bf....
        .........fffbddddff.....
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ......ff....fffff.......
        .....ff....fcbdddff.....
        .....ffffffcbdddddbf....
        .....ffffbfbbddd111f....
        .....fffb1fbbdd11111f...
        .....ffb11f1ddd11111f...
        ......ffb1f1cbd11111f...
        ......fb1c11ff111111f...
        .......fffb1dd11111f....
        ........fb11d11111bf....
        .........fffbddddff.....
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand2, img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        77.....fffbddccffff.....
        ..777777fffcfbbb1bcf....
        ...77777777777cd1b1f....
        ...ffffff777777fdfdf....
        .....ffffff...77f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        77.....fffbddccffff.....
        ..777777fffcfbbb1bcf....
        ...77777777777cd1b1f....
        ...ffffff777777fdfdf....
        .....ffffff...77f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg2, img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........ffffffb1f.fffff.
        ........f77777fbffb111cf
        ....222277fff77777fb1b1f
        ..77..7772222222277fbfbf
        ...7777222222f222222fff.
        ..2....ffffff...........
        ........................
        ........................
        ........................
        ........................
        `, img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........ffffffb1f.fffff.
        ........f77777fbffb111cf
        ....222277fff77777fb1b1f
        ..77..7772222222277fbfbf
        ...7777222222f222222fff.
        ..2....ffffff...........
        ........................
        ........................
        ........................
        ........................
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageB, 17)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Hitover, img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fddddfdf1fdf......
        ......fbddddfdd1ff......
        ......ffbbdfdfdfdf......
        .......fcbbdddddbf......
        .......fffbddccffffffff.
        .......ffffcfbbb1bcf1bcf
        ......ffffffffcd1b1f1b1f
        ...ffffffffff..fdfdfdfdf
        .....ffffff.....f.f.f.f.
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Lie, img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........fffff...........
        ......ffdfdfbfff........
        .....fb111f1d11bf.......
        .....f111f1fd1bfff......
        ....f111111dd11c1bf.....
        ....f11111ddd1f1bff.....
        ....f1111fdfd1f11bff....
        ....f11111fdbbf1bfff....
        .....f111fdfbbfbffff....
        .....fbdddddbcffffff....
        ......ffdddbcf....ff....
        ........fffff....ff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Stand, img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `)
})
fightext_character.basicSet(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    `, "Stickman", function (player2) {
    fightext_skill.defaultSkill(player2)
})
fightext_character.basicSet(img`
    . . . c c . . . . . . . . . . . 
    . . c 3 6 c c c c . . . . . . . 
    . . c 6 3 f 3 3 6 c . . . . . f 
    . c 3 3 3 3 f c c 6 c . c c f . 
    c 3 3 3 3 3 c f 5 c 6 c 5 f b . 
    c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
    c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
    c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
    c 3 3 3 3 c c b 5 5 5 5 5 c c . 
    . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
    . . b b c 5 b b 4 4 4 4 b 4 5 b 
    . b 5 4 c 4 5 5 5 b 4 b 5 5 4 c 
    . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
    . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
    . c c c . . c c c c c c c c c . 
    `, "Hermy", function (player2) {
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Hurt, [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c c . . . . . . 
        . c c 6 3 3 3 3 6 6 c . . . . . 
        c 6 3 3 3 3 3 6 6 6 6 c . . . . 
        c 3 3 3 3 3 6 6 6 6 6 c . . . . 
        c 3 3 3 3 6 6 6 6 6 6 c c c . . 
        c c 6 6 6 6 6 6 6 6 c 3 3 3 c . 
        c 6 3 3 3 6 6 6 c c 3 c c c 6 c 
        c 3 3 3 3 3 6 c c c c c c c c c 
        . c c c 6 6 c 4 5 5 c c 4 5 5 c 
        . . . c 6 6 6 c 5 5 5 c 5 5 4 c 
        . . . . c c c c c c c c c c c . 
        `], 500)
    fightext_character.setAbility(player2, fightext_character.abilityKind.walkspeed, 27)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageA, 29)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand1, img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333366c.............
        c3333336666c............
        c333336cc66cccb.........
        cc3336c55c6c55b.........
        cc6666ff5c6c5ff.........
        c33333ff5cc35ff.........
        c33333c555355b..........
        .c33333c45554c..........
        ..bbccccb44bbbbbb.......
        .b54ccc55cbb555b5c......
        .c5ccccc5545555c5c......
        .c5c...cc5455555c5c.....
        .ccc....ccccccccccc.....
        `, img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333366c.............
        c3333336666c............
        c333336cc66cccb.........
        cc3336c55c6c55b.........
        cc6666ff5c6c5ff.........
        c33333ff5cc35ff.........
        c33333c555355b..........
        .c33333c45554c..........
        ..bbccccb44bbbbbb.......
        .b54ccc55cbb555b5c......
        .c5ccccc5545555c5c......
        .c5c...cc5455555c5c.....
        .ccc....ccccccccccc.....
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Defence, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c . . 
        . . . . . . . c c c c c 6 3 c . 
        . . . . . . c 6 6 3 3 3 6 6 c . 
        . . . . . c 6 6 6 3 3 3 3 3 3 c 
        . . . . c 6 6 6 6 3 3 3 3 3 3 c 
        . . c c c 6 6 6 6 6 3 3 3 3 3 c 
        . c 3 3 3 c 6 6 6 6 6 3 3 3 3 c 
        c 3 c c c 3 c 6 6 6 6 6 3 3 c c 
        c 6 c c c c 3 c 6 6 6 6 6 6 c c 
        c 6 c c c c 6 6 c 6 6 3 3 3 3 c 
        . c 6 c c c c 6 c 6 3 3 3 3 6 c 
        . . c 6 c c c c c 6 3 3 3 6 c . 
        . . . c c c c c c c c c c c . . 
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageB, 27)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg1, img`
        ..cc....................
        .c36cccccccc............
        cc63c555c555c...........
        c33c555c4c555c..........
        c33c555c4c555c..........
        c33c555c4c555c..........
        cc3c555ccc55cc..........
        cc6c55ff5ccc5ff.........
        c33c4cff5ccc5ff.........
        c33c5cc55ccc55c.........
        c33c5cc55ccc55c.........
        .ccc54c553c355c.........
        .c54c44c55555c..........
        .c5cccc45555cc..........
        .c5cccc4555cc...........
        .ccc..cccccc............
        `, img`
        ..cc....................
        .c36cccccccc............
        cc63c555c555c...........
        c33c555c4c555c..........
        c33c555c4c555c..........
        c33c555c4c555c..........
        cc3c555ccc55cc..........
        cc6c55ff5ccc5ff.........
        c33c4cff5ccc5ff.........
        c33c5cc55ccc55c.........
        c33c5cc55ccc55c.........
        .ccc54c553c355c.........
        .c54c44c55555c..........
        .c5cccc45555cc..........
        .c5cccc4555cc...........
        .ccc..cccccc............
        `)
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Walk, [img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c b 5 5 5 5 c . . 
        . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
        . . b b b c c 5 b b 4 4 b 5 c . 
        . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
        . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
        . c c c 4 4 4 c 5 5 5 5 c 5 c . 
        . . . . . . . c c c c c c c . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c . . . . . . . . . . 
        . . . c 3 6 c c c c . . . . . . 
        . . . c 6 3 3 3 6 6 c . . . . . 
        . . c 3 3 3 3 3 3 6 6 c . . . . 
        . c 3 3 3 3 3 3 c c 6 6 c c c b 
        . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
        . c c 3 3 3 6 f f 5 c 6 c 5 f f 
        . c c 6 6 6 6 f f 5 c c c 5 f f 
        . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
        . c 3 3 3 3 c c c 4 5 5 5 5 c . 
        . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
        . . . c b b c 5 b b 4 4 b 5 c . 
        . . . c 5 c c 5 5 5 c 4 5 c c . 
        . . . c c c c 5 5 5 5 c c . . . 
        . . . . . . c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 6 6 c . . . . . . 
        . c 3 3 3 3 3 3 6 6 c . . . . . 
        c 3 3 3 3 3 3 c c 6 6 c c c b . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 c c c 5 f f . 
        c 3 3 3 3 c c c 5 5 3 5 5 b . . 
        c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
        . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
        . . c b 5 5 5 b 4 4 4 b 5 5 c . 
        . . b c 5 5 5 c 4 4 4 5 5 5 c . 
        . . c c 5 5 5 5 c 4 c c c c . . 
        . . c c c c c c c c c c . . . . 
        `,img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
        . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
        . . c c b 5 5 5 c 4 4 4 b 4 5 b 
        . . b b c 5 5 5 c 4 4 b 5 5 4 c 
        . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
        . c 5 c c c c c c 4 c 5 5 5 5 c 
        . c c c . . . . . c c c c c c . 
        `], 200)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand2, img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c 3 c c c c c . c c . 
        . . c 6 3 3 f f 5 c 6 c c 5 f f 
        . c 3 3 3 3 f f 5 c 6 c c 5 f f 
        c 3 3 3 3 3 c 5 5 5 c c 5 5 5 b 
        c 3 3 3 3 6 c 5 5 5 c c 5 5 5 b 
        c c 3 3 3 6 3 c 5 5 3 c 5 5 b b 
        c c 6 6 3 3 3 c 5 5 3 c 5 5 b b 
        c 3 3 3 3 c c b 5 5 5 5 5 c c . 
        c 3 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
        . c 3 3 c 5 b b 4 4 4 4 b 4 5 b 
        . . b b c 4 5 5 5 b 4 b 5 5 4 c 
        . b 5 4 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
        . c c c . . c c c c c c c c c . 
        `, img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c 3 c c c c c . c c . 
        . . c 6 3 3 f f 5 c 6 c c 5 f f 
        . c 3 3 3 3 f f 5 c 6 c c 5 f f 
        c 3 3 3 3 3 c 5 5 5 c c 5 5 5 b 
        c 3 3 3 3 6 c 5 5 5 c c 5 5 5 b 
        c c 3 3 3 6 3 c 5 5 3 c 5 5 b b 
        c c 6 6 3 3 3 c 5 5 3 c 5 5 b b 
        c 3 3 3 3 c c b 5 5 5 5 5 c c . 
        c 3 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
        . c 3 3 c 5 b b 4 4 4 4 b 4 5 b 
        . . b b c 4 5 5 5 b 4 b 5 5 4 c 
        . b 5 4 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
        . c c c . . c c c c c c c c c . 
        `)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg2, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 6 3 3 3 6 c . . 
        . . . . . c 6 6 3 3 3 3 3 3 c . 
        . b c c c 6 6 c c 3 3 3 3 3 3 c 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . f f 5 c c c 5 f f 6 6 6 6 c c 
        . . b 5 5 3 5 5 c c c 3 3 3 3 c 
        . . c 5 5 5 5 5 b 5 5 c 3 3 3 c 
        . c 4 4 5 5 4 4 b b 5 c 3 3 c . 
        . c 5 5 b 4 4 4 b 5 5 5 b c . . 
        . c 5 5 5 4 4 4 c 5 5 5 c b . . 
        . . c c c c 4 c 5 5 5 5 c c . . 
        . . . . c c c c c c c c c c . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 6 3 3 3 6 c . . 
        . . . . . c 6 6 3 3 3 3 3 3 c . 
        . b c c c 6 6 c c 3 3 3 3 3 3 c 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . f f 5 c c c 5 f f 6 6 6 6 c c 
        . . b 5 5 3 5 5 c c c 3 3 3 3 c 
        . . c 5 5 5 5 5 b 5 5 c 3 3 3 c 
        . c 4 4 5 5 4 4 b b 5 c 3 3 c . 
        . c 5 5 b 4 4 4 b 5 5 5 b c . . 
        . c 5 5 5 4 4 4 c 5 5 5 c b . . 
        . . c c c c 4 c 5 5 5 5 c c . . 
        . . . . c c c c c c c c c c . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Lie, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c c c c c . . . 
        . f 6 3 f 3 6 c c c c c 6 c . . 
        c 6 f 3 f 3 6 c 6 c c c c f c . 
        c 3 f 3 3 f 6 c 6 f c c c c f c 
        c c 6 f 6 6 f 6 f 3 c c c c 6 c 
        c c 3 3 f 6 f f 6 c 3 c c c 3 c 
        c 3 3 3 f 6 f f 6 6 c 3 3 3 c . 
        c 3 3 3 f f 6 6 f 6 6 c c c . . 
        c 3 3 f 3 3 f 6 f 6 6 c . . . . 
        c 3 f 3 3 f 3 6 6 f c . . . . . 
        . f 6 6 f 3 3 6 6 c . . . . . . 
        . c 3 f c c c c c . . . . . . . 
        . . c c . . . . . . . . . . . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Hitover, img`
        . . . . . . . . . . c b c c c . 
        . . . . b 2 2 b . c 5 5 4 5 5 c 
        . . . c 5 2 2 5 b c 5 4 5 5 5 c 
        . . . c 5 5 5 5 5 5 4 b 5 5 5 c 
        . . . . c c c 3 5 5 5 4 b c 5 c 
        . . . c 6 6 6 c 3 5 5 4 4 4 c c 
        . . c 6 c c c 3 5 5 5 4 b c 5 c 
        . c 6 c 5 5 5 5 5 5 4 4 5 5 5 c 
        . c 3 c 5 2 2 5 c b b b 5 5 5 c 
        . c f 3 c 2 2 c 3 c 5 b 5 5 5 c 
        . c 3 f 3 3 6 6 3 c 5 5 4 c c . 
        c 6 3 3 f 3 3 6 3 3 f c c 4 4 . 
        c 3 6 3 3 f 3 6 3 f 3 b 4 c c c 
        . c c 3 3 f 3 6 f 3 3 b 5 5 5 c 
        . . . c f 3 c f 3 3 c . b c c c 
        . . . . c c c c c c . . . . . . 
        `)
    fightext_skill.defaultSkill(player2)
})
playGame.characterMenus()
fightext_skill.skillSet("Blobber", function (player2) {
    fightext_skill.setSkill(player2, fightext_skill.SkillKind.B3, 9, function (tempVar, undefined) {
        fightext_skill.immune(player2, 90)
    })
    fightext_skill.setSkill(player2, fightext_skill.SkillKind.B1, 0, function (tempVar, undefined) {
        fightext_skill.defaultSkill(player2)
    })
    fightext_skill.setSkill(player2, fightext_skill.SkillKind.A1, 50, function (tempVar, undefined) {
        fightext_character.atkAction(player2, fightext_character.atkKind.BasicAtkA)
        fightext_character.atkAction(player2, fightext_character.atkKind.BasicAtkB)
        fightext_character.atkAction(player2, fightext_character.atkKind.BasicAtkA)
        fightext_character.atkAction(player2, fightext_character.atkKind.BasicAtkA)
        fightext_character.atkAction(player2, fightext_character.atkKind.BasicAtkA)
        fightext_character.atkAction(player2, fightext_character.atkKind.BasicAtkA)
    })
})
fightext_skill.skillSet("Cave Bat", function (player2) {
    fightext_skill.setSkill(player2, fightext_skill.SkillKind.A3, 19, function (tempVar, undefined) {
        fightext_skill.immune(player2, 10)
    })
    fightext_skill.setSkill(player2, fightext_skill.SkillKind.B9, 100, function (tempVar, undefined) {
        fightext_skill.stop(player2, 60)
    })
})
fightext_skill.skillSet("Skelly", function (player2) {
    fightext_skill.setSkill(player2, fightext_skill.SkillKind.A1, 15, function (tempVar, undefined) {
        fightext_character.atkAction(player2, fightext_character.atkKind.BasicAtkB)
        fightext_character.atkAction(player2, fightext_character.atkKind.RushAtkA)
        fightext_character.atkAction(player2, fightext_character.atkKind.RushAtkB)
        fightext_character.atkAction(player2, fightext_character.atkKind.RushAtkB)
        fightext_character.atkAction(player2, fightext_character.atkKind.RushAtkB)
    })
    fightext_skill.setSkill(player2, fightext_skill.SkillKind.B8, 5, function (tempVar, undefined) {
        fightext_character.atkAction(player2, fightext_character.atkKind.BasicAtkA)
        fightext_skill.hurtedDown(player2, 999, 270)
        fightext_skill.immune(player2, 60)
    })
})
