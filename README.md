This example uses an optional custom transition.

```
function FlyinArea() {
  return (
    <div>
      <FlyinWrapper>
        <FlyinItem 
          image='panda.png' 
          startPosition={{ left: '-500px', top: '100px' }} 
          endPosition={{ left: '650px', top: '100px' }} 
          transition="all 3s ease-in-out"
          />
        <FlyinItem 
          image='skateboard.png' 
          startPosition={{ right: '-500px', top: '100px' }} 
          endPosition={{ left: '1223px', top: '-10px' }} />
        <FlyinItem 
          image='veil.png' 
          startPosition={{ left: '-300px', top: '100px' }} 
          endPosition={{ left: '503px', top: '-40px' }} />
        <FlyinItem 
          image='tiny-blur.png' 
          startPosition={{ left: '-500px', top: '400px' }} 
          endPosition={{ left: '400px', top: '300px' }} />
      </FlyinWrapper>
    </div>
  )
}
```

