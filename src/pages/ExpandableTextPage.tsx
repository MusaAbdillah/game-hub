import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/react";
import { useState } from "react";

// interface Props {
//     children: string;
// }

const ExpandableTextPage = (children: string) => {
  
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if (children.length <= limit)
        return <Text>{children}</Text>;
    
    const summary = expanded ? children : children.substring(0, limit) + "..." 
    
    return (
            <Text>
                {summary}
                <Button
                    size="xs"
                    fontWeight="bold"
                    colorScheme="yellow"
                    marginLeft={3}
                    onClick={() => setExpanded(!expanded)}>
                    {expanded ? 'Show less' : 'Show more'}
                </Button>
            </Text>
    )
}

export default ExpandableTextPage;
