function spinalCase(str) {
    return str.replace(/(.)([A-Z])/g, `$1 $2`).replace(/\s+|_+/g, "-").replace(/--/g, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');