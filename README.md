# TEXTI-GIF
<img width="1728" alt="image" src="https://cdn.discordapp.com/attachments/1124722349023965329/1124722639848624268/readme.1.png">

## HOW TO USE

```bash
pnpm i @rahul-m-navneeth/textigif
```

### NEXT APP

```reactjs
"use client"
import TextiGIF from "@rahul-m-navneeth/textigif"

const Sample = () => {
    return (
        <>
            NEVER <TextiGIF text="GONNA" url="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif" /> GONNA GIVE YOU UP
        </>
    )
} 

export default Sample;
```

## FEATURES

| ATTRIBUTE |       TYPE       |                          DEFAULT                           |
| --------- | ---------------- | --------------------------------------------------------   |
| text?     | string           | Empty String                                               |
| url?      | string           | https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif |
| color?    | string           | black                                                      |
| width?    | string           | 300px                                                      |
| position? | "TOP" , "BOTTOM" | "TOP"                                                      |



