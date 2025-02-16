```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: attempts to update count inside a callback passed to setTimeout
    setTimeout(() => {
      setCount(count + 1); // This will likely not work as expected
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```